import { StyleSheet } from 'react-native';
import { spacing } from './spacing';

export const $styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  flex1: { flex: 1 },
  flexWrap: { flexWrap: 'wrap' },
  container: {
    paddingTop: spacing.lg + spacing.xl,
    paddingHorizontal: spacing.lg,
  },
});
