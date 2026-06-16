import { StyleSheet } from 'react-native';
import { colors, spacing } from '@/theme';

export const styles = StyleSheet.create({
  sectionLabel: {
    marginTop: spacing.lg,
  },
  list: {
    marginTop: spacing.sm,
  },
  row: {
    minHeight: 52,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.xs,
    marginTop: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  rowActive: {
    backgroundColor: colors.tint,
    borderColor: colors.tint,
  },
  rowInactive: {
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.border,
  },
});
