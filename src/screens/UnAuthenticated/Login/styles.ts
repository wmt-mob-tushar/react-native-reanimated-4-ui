import { StyleSheet } from 'react-native';
import { Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    subtitle: {
      marginTop: theme.spacing.xs,
    },
    label: {
      marginTop: theme.spacing.md,
    },
    input: {
      minHeight: 52,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      marginTop: theme.spacing.sm,
      backgroundColor: theme.colors.palette.neutral100,
      color: theme.colors.text,
    },
    error: {
      marginTop: theme.spacing.sm,
    },
    footer: {
      marginTop: theme.spacing.xl,
    },
  });
