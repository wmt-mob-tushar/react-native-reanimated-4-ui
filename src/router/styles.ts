import { StyleSheet } from 'react-native';
import { Theme } from '@/theme';

export const createTabStyles = (theme: Theme) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: theme.colors.background,
      borderTopColor: theme.colors.separator,
    },
  });
