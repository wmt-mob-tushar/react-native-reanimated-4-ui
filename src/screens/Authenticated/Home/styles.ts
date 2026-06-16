import { StyleSheet } from 'react-native';
import { Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    name: {
      marginTop: theme.spacing.xs,
    },
    welcome: {
      marginTop: theme.spacing.md,
    },
  });
