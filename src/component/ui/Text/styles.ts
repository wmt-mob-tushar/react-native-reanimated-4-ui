import { StyleSheet, TextStyle } from 'react-native';
import { TextPreset, TextWeight, colors, typography } from '@/theme';

export const styles = StyleSheet.create<Record<TextPreset, TextStyle>>({
  default: {
    fontFamily: typography.primary.normal,
    fontSize: 16,
    color: colors.text,
  },
  heading: {
    fontFamily: typography.primary.bold,
    fontSize: 24,
    color: colors.text,
  },
  subheading: {
    fontFamily: typography.primary.medium,
    fontSize: 18,
    color: colors.text,
  },
  label: {
    fontFamily: typography.primary.medium,
    fontSize: 14,
    color: colors.text,
  },
});

export const weightFamily = (weight: TextWeight) => typography.primary[weight];
