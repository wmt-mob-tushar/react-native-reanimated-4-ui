import { StyleSheet } from 'react-native';
import { colors, spacing } from '@/theme';

export const styles = StyleSheet.create({
  subtitle: {
    marginTop: spacing.xs,
  },
  label: {
    marginTop: spacing.md,
  },
  input: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.xs,
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
    backgroundColor: colors.palette.neutral100,
    color: colors.text,
  },
  error: {
    marginTop: spacing.sm,
  },
  footer: {
    marginTop: spacing.xl,
  },
});
