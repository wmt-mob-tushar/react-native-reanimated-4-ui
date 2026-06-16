import { StyleSheet, TextStyle } from 'react-native';
import { TextPreset, TextWeight, Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create<Record<TextPreset, TextStyle>>({
    default: {
      fontFamily: theme.typography.primary.normal,
      fontSize: 16,
      color: theme.colors.text,
    },
    heading: {
      fontFamily: theme.typography.primary.bold,
      fontSize: 24,
      color: theme.colors.text,
    },
    subheading: {
      fontFamily: theme.typography.primary.medium,
      fontSize: 18,
      color: theme.colors.text,
    },
    label: {
      fontFamily: theme.typography.primary.medium,
      fontSize: 14,
      color: theme.colors.text,
    },
  });

export const weightFamily = (theme: Theme, weight: TextWeight) =>
  theme.typography.primary[weight];
