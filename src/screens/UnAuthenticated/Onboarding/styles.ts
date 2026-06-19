import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme,rt) => ({
  screen: {
    padding: 0,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    gap: theme.rf(20),
    paddingVertical: theme.rf(8),
  },
  bgVector: {
    position: 'absolute',
    top: theme.rh(-100),
    right: theme.rw(rt.screen.width * 0.5),
    opacity: 0.7,
  },

  // ---- Logo ----
  logo: {
    alignItems: 'center',
  },
  logoCircle: {
    width: theme.rf(69),
    height: theme.rf(69),
    borderRadius: theme.rf(100),
    borderWidth: 10,
    borderColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  brand: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(24),
    fontWeight: '500',
    lineHeight: theme.rf(31),
    letterSpacing: -0.264,
    textAlign: 'center',
    color: theme.colors.primary,
    marginTop: theme.rf(10),
  },

  stack: {
    height: theme.rh(473),
    overflow: 'visible',
  },
  card: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderWidth: 7,
    borderColor: theme.colors.white,
    padding: 30,
  },
  illoWrap: {
    position: 'absolute',
  },
  star: {
    position: 'absolute',
    top: theme.rf(-6),
    left: theme.rf(-4),
    zIndex: 5,
  },
  bulb: {
    position: 'absolute',
    top: theme.rf(-26),
    right: theme.rf(8),
    zIndex: 5,
  },
  bulbIcon: {
    width: theme.rf(26),
    height: theme.rf(26),
  },
  cardTitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(28),
    fontWeight: '500',
    letterSpacing: -0.33,
    color: theme.colors.primary,
  },
  backCardTitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(16),
    fontWeight: '500',
    letterSpacing: -0.176,
    color: theme.colors.primary60,
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: '#6CA2DF',
    borderRadius: theme.rf(22),
    paddingHorizontal: theme.rf(16),
    paddingVertical: theme.rf(6),
    marginTop: theme.rf(8),
  },
  pillText: {
    fontFamily: theme.typography.primary.bold,
    fontSize: theme.rf(24),
    color: theme.colors.white,
  },
  cardDesc: {
    fontFamily: theme.typography.primary.normal,
    fontSize: theme.rf(14),
    lineHeight: theme.rf(18),
    letterSpacing: -0.154,
    color: theme.colors.primary50,
    marginTop: theme.rf(14),
    maxWidth: '56%',
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.rf(6),
    marginTop: theme.rf(16),
  },
  dot: {
    width: theme.rf(8),
    height: theme.rf(8),
    borderRadius: theme.rf(4),
    backgroundColor: theme.colors.primary24,
  },
  dotActive: {
    width: theme.rf(26),
    backgroundColor: theme.colors.primary,
  },
  buttons: {
    paddingHorizontal: 18,
    gap: theme.rf(12),
    zIndex: 50,
  },
  btn: {
    borderRadius: theme.rf(30),
  },
}));
