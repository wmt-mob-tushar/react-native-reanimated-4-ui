import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '@/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: spacing.xs,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.tint,
  },
  secondary: {
    backgroundColor: colors.palette.secondary500,
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.tint,
  },
  disabled: {
    opacity: 0.6,
  },
  label: {
    fontFamily: typography.primary.medium,
    fontSize: 16,
    color: colors.palette.neutral100,
  },
  labelOutline: {
    color: colors.tint,
  },
});
