import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import type { Theme } from '@/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    sectionLabel: {
      marginTop: theme.spacing.lg,
    } as TextStyle,
    list: {
      marginTop: theme.spacing.sm,
    } as ViewStyle,
    row: {
      minHeight: 52,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.spacing.xs,
      marginTop: theme.spacing.xs,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
    } as ViewStyle,
    rowActive: {
      backgroundColor: theme.colors.tint,
      borderColor: theme.colors.tint,
    } as ViewStyle,
    rowInactive: {
      backgroundColor: theme.colors.palette.neutral100,
      borderColor: theme.colors.border,
    } as ViewStyle,
  });
