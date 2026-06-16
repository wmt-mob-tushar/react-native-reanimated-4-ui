import { StyleSheet } from 'react-native';
import { Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    email: {
      marginTop: theme.spacing.xs,
    },
    footer: {
      marginTop: theme.spacing.xl,
    },
  });
