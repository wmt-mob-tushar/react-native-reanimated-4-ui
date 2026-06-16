import { StyleSheet, TextStyle } from 'react-native';
import type { Theme } from '@/theme';

export type TextPreset = 'default' | 'heading' | 'subheading' | 'label';
export type TextWeight = 'normal' | 'medium' | 'bold';

export const createStyles = (theme: Theme) => {
  const family = theme.typography.primary;

  return StyleSheet.create<Record<TextPreset, TextStyle>>({
    default: {
      fontFamily: family.normal,
      fontSize: 16,
      color: theme.colors.text,
    },
    heading: {
      fontFamily: family.bold,
      fontSize: 24,
      color: theme.colors.text,
    },
    subheading: {
      fontFamily: family.medium,
      fontSize: 18,
      color: theme.colors.text,
    },
    label: {
      fontFamily: family.medium,
      fontSize: 14,
      color: theme.colors.text,
    },
  });
};

export const weightFamily = (theme: Theme, weight: TextWeight) =>
  theme.typography.primary[weight];
