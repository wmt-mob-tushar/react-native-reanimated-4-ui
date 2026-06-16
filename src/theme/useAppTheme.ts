import { useMemo } from 'react';
import { useAppSelector } from '@/reduxToolkit/hooks';
import { darkTheme, lightTheme } from './theme';
import type { Theme } from './types';

export const useAppTheme = () => {
  const mode = useAppSelector(state => state.app.theme);
  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);
  return { theme, mode };
};

export const useStyles = <T extends object>(factory: (theme: Theme) => T): T => {
  const { theme } = useAppTheme();
  return useMemo(() => factory(theme), [theme, factory]);
};
