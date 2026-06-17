import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, rt) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  listContent: {
    paddingBottom: 48,
  },
  header: {
    backgroundColor: theme.colors.mint,
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 19,
  },
  bgArc: {
    position: 'absolute',
    left: rt.screen.width * 0.4,
    transform: [{ rotate: '-10deg' }]
  },
  backBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  lettersLabel: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 14,
    color: '#8A91D0',
    letterSpacing: 0.5,
    marginTop: 18,
  },
  title: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
    letterSpacing: -0.275,
    color: theme.colors.primary,
    marginTop: 4,
    maxWidth: '60%',
  },
  capsuleRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  capsule: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  capsuleIcon: {
    marginRight: 5,
  },
  capsuleText: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: -0.11,
    color: theme.colors.primary,
  },
  illustration: {
    position: 'absolute',
    right: -16,
    bottom: 0,
  },

  // AI buddy banner (blurred)
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    marginTop: 22,
    overflow: 'hidden',
  },
  bannerTextCol: {
    flex: 1,
  },
  bannerSubtitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 11,
    color: 'rgba(28, 39, 76, 0.5)',
  },
  bannerTitle: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 15,
    color: theme.colors.primary,
    marginTop: 2,
  },
  bannerRing: {
    position: 'absolute',
    right: 16,
  },
  ringCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  // ---- Lesson list rows ----
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  // ---- Card ----
  cardCol: {
    flex: 1,
    marginLeft: 14,
    paddingBottom: 20,
  },
  card: {
    padding: 20,
    borderRadius: 30,
  },
  cardFaded: {
    opacity: 0.5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: theme.typography.primary.medium,
    fontSize: theme.rf(16),
    fontWeight: '500',
    lineHeight: theme.rf(19),
    letterSpacing: -0.176,
    color: theme.colors.primary,
    flex: 1,
    paddingRight: 8,
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    opacity: 0.1,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
  },
  badgeIcon: {
    marginRight: 4,
  },
  durationText: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 12,
    color: theme.colors.primary,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  cardDesc: {
    flex: 1,
    marginRight: 12,
    fontFamily: theme.typography.primary.normal,
    fontSize: theme.rf(12),
    lineHeight: theme.rf(17),
    letterSpacing: -0.132,
    color: '#01000080',
  },
  playBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: theme.rw(118),
    backgroundColor: theme.colors.white,
    paddingLeft: 16,
    paddingRight: 6,
    paddingVertical: 6,
    borderRadius: 24,
  },
  playBtnText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.typography.primary.bold,
    fontSize: theme.rf(10),
    lineHeight: theme.rf(13),
    letterSpacing: -0.11,
    color: theme.colors.primary,
    marginRight: 8,
  },
  playCircle: {
    width: theme.rf(31),
    height: theme.rf(31),
    borderRadius: theme.rf(16),
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    marginLeft: 2,
  },
}));
