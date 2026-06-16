import { StyleSheet, ViewStyle } from 'react-native';
import type { Theme } from '@/theme';

export const createTabStyles = (theme: Theme) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: theme.colors.background,
      borderTopColor: theme.colors.separator,
    } as ViewStyle,
  });
