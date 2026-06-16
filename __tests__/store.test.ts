import rootReducer, {
  clearFavorites,
  logout,
  setLanguage,
  setTheme,
  setToken,
  setUser,
  toggleFavorite,
} from '@/reduxToolkit/rootSlice';
import { EventItem } from '@/utils/types';
import { isValidEmail } from '@/utils';

const event: EventItem = { event_date_id: 'e1', title: 'Concert', date: '2026-01-01' };

describe('rootSlice', () => {
  const initial = rootReducer(undefined, { type: '@@INIT' });

  it('starts empty', () => {
    expect(initial.token).toBe('');
    expect(initial.user).toBeNull();
    expect(initial.favorites).toEqual([]);
    expect(initial.language).toBe('en');
  });

  it('stores token and user', () => {
    const user = { id: '1', name: 'Jane', email: 'jane@example.com' };
    const state = rootReducer(rootReducer(initial, setToken('abc')), setUser(user));
    expect(state.token).toBe('abc');
    expect(state.user).toEqual(user);
  });

  it('toggles favorites on and off', () => {
    const added = rootReducer(initial, toggleFavorite(event));
    expect(added.favorites).toHaveLength(1);
    const removed = rootReducer(added, toggleFavorite(event));
    expect(removed.favorites).toHaveLength(0);
  });

  it('clears favorites', () => {
    const added = rootReducer(initial, toggleFavorite(event));
    expect(rootReducer(added, clearFavorites()).favorites).toEqual([]);
  });

  it('defaults to the light theme and updates it', () => {
    expect(initial.theme).toBe('light');
    expect(rootReducer(initial, setTheme('dark')).theme).toBe('dark');
  });

  it('updates language', () => {
    expect(rootReducer(initial, setLanguage('es')).language).toBe('es');
  });

  it('keeps language and theme but resets the rest on logout', () => {
    let state = rootReducer(initial, setLanguage('es'));
    state = rootReducer(state, setTheme('dark'));
    state = rootReducer(state, setToken('abc'));
    const after = rootReducer(state, logout());
    expect(after.token).toBe('');
    expect(after.language).toBe('es');
    expect(after.theme).toBe('dark');
  });
});

describe('isValidEmail', () => {
  it('accepts valid addresses', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('rejects invalid addresses', () => {
    expect(isValidEmail('not-an-email')).toBe(false);
  });
});
