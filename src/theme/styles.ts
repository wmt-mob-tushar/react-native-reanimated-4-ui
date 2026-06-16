import { ViewStyle } from 'react-native';
import { spacing } from './spacing';

export const $styles = {
  row: { flexDirection: 'row' } as ViewStyle,
  flex1: { flex: 1 } as ViewStyle,
  flexWrap: { flexWrap: 'wrap' } as ViewStyle,

  container: {
    paddingTop: spacing.lg + spacing.xl,
    paddingHorizontal: spacing.lg,
  } as ViewStyle,
};
