import { StyleSheet } from 'react-native-unistyles';

const COL = 64;
const LINE_W = 8;

export const styles = StyleSheet.create(theme => ({
  col: {
    width: COL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Square ends + a few px of overlap past each row edge so consecutive
  // segments merge into one continuous line (no pinch/"cut").
  lineTop: {
    position: 'absolute',
    top: -3,
    bottom: '50%',
    left: (COL - LINE_W) / 2,
    width: LINE_W,
  },
  lineBottom: {
    position: 'absolute',
    top: '50%',
    bottom: -3,
    left: (COL - LINE_W) / 2,
    width: LINE_W,
  },
  // Completed — green donut + check (8px ring).
  completedRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.progressGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedGap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedCore: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.progressGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Active — segmented arcs over an opaque white base + pale-blue inner.
  activeOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeRingSvg: {
    position: 'absolute',
  },
  activeInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Locked — thick outer ring + thin inner ring around the number.
  lockedCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.white,
    borderWidth: 8,
    borderColor: theme.colors.timelineGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedInner: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1.5,
    borderColor: theme.colors.timelineGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 18,
    color: theme.colors.primary,
  },
  numberLocked: {
    color: 'rgba(28, 39, 76, 0.4)',
  },
}));
