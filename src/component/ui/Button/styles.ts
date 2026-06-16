import { StyleSheet } from 'react-native';
import { Theme } from '@/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    base: {
      minHeight: 52,
      borderRadius: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary: {
      backgroundColor: theme.colors.tint,
    },
    secondary: {
      backgroundColor: theme.colors.palette.secondary500,
    },
    outline: {
      backgroundColor: theme.colors.transparent,
      borderWidth: 1,
      borderColor: theme.colors.tint,
    },
    disabled: {
      opacity: 0.6,
    },
    label: {
      fontFamily: theme.typography.primary.medium,
      fontSize: 16,
      color: theme.colors.palette.neutral100,
    },
    labelOutline: {
      color: theme.colors.tint,
    },
  });
