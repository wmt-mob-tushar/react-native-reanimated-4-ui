import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    email: {
      marginTop: theme.spacing.xs,
    } as TextStyle,
    footer: {
      marginTop: theme.spacing.xl,
    } as ViewStyle,
  });
