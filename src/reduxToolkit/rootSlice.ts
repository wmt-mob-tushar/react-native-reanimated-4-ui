import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { EventItem, LanguageCode, ThemeMode, UserData } from '@/utils/types';

export const logout = createAction('LOGOUT');

interface InitialState {
  user: UserData | null;
  token: string;
  favorites: EventItem[];
  language: LanguageCode;
  theme: ThemeMode;
}

const initialState: InitialState = {
  user: null,
  token: '',
  favorites: [],
  language: 'en',
  theme: 'light',
};

const rootSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<EventItem>) => {
      const index = state.favorites.findIndex(
        item => item.event_date_id === action.payload.event_date_id,
      );
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
    clearFavorites: state => {
      state.favorites = [];
    },
  },
  extraReducers: builder =>
    builder.addCase(logout, state => ({
      ...initialState,
      language: state.language,
      theme: state.theme,
    })),
});

export const { setUser, setToken, setLanguage, setTheme, toggleFavorite, clearFavorites } =
  rootSlice.actions;

export default rootSlice.reducer;
