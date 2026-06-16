import { StyleSheet, ViewStyle } from 'react-native';
import type { Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    } as ViewStyle,
    content: {
      flexGrow: 1,
      padding: theme.spacing.lg,
    } as ViewStyle,
  });
