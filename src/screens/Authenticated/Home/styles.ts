import { StyleSheet, TextStyle } from 'react-native';
import type { Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    name: {
      marginTop: theme.spacing.xs,
    } as TextStyle,
    welcome: {
      marginTop: theme.spacing.md,
    } as TextStyle,
  });
