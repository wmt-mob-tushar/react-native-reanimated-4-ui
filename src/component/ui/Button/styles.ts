import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '@/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      minHeight: 52,
      borderRadius: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
    primary: {
      backgroundColor: theme.colors.tint,
    } as ViewStyle,
    secondary: {
      backgroundColor: theme.colors.palette.secondary500,
    } as ViewStyle,
    outline: {
      backgroundColor: theme.colors.transparent,
      borderWidth: 1,
      borderColor: theme.colors.tint,
    } as ViewStyle,
    disabled: {
      opacity: 0.6,
    } as ViewStyle,
    label: {
      fontFamily: theme.typography.primary?.medium,
      fontSize: 16,
      color: theme.colors.palette.neutral100,
    } as TextStyle,
    labelOutline: {
      color: theme.colors.tint,
    } as TextStyle,
  });
