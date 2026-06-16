import { useMemo } from 'react';
import { theme } from './theme';
import type { Theme } from './types';

export const useAppTheme = () => ({ theme });

export const useStyles = <T extends object>(factory: (t: Theme) => T): T =>
  useMemo(() => factory(theme), [factory]);
