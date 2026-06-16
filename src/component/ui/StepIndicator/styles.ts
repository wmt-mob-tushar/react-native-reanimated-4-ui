import { StyleSheet } from 'react-native';
import { colors, typography } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    width: 50,
    alignItems: 'center',
    flex: 1,
  },
  connectorContainer: {
    flex: 1,
    width: 4,
    alignItems: 'center',
  },
  verticalLine: {
    width: 3.5,
    flex: 1,
  },
  gradientLineContainer: {
    width: 3.5,
    flex: 1,
  },
  indicatorContainer: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.palette.progressGreen,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.palette.progressGreen,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  activeCircleWrapper: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCircleSvg: {
    position: 'absolute',
  },
  activeCircleInner: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.palette.neutral100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  indicatorNumberText: {
    fontFamily: typography.primary.bold,
    fontSize: 14,
    color: colors.palette.primary,
  },
  lockedCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.palette.neutral100,
    borderWidth: 1.5,
    borderColor: colors.palette.timelineGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedIndicatorText: {
    color: 'rgba(28, 39, 76, 0.4)',
  },
  fadedIndicator: {
    opacity: 0.6,
  },
});
