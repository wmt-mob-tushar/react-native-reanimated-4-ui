import { useCallback } from 'react';
import { Image, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { Button, Screen, Text } from '@/component';
import { useAppDispatch } from '@/reduxToolkit/hooks';
import { setToken } from '@/reduxToolkit/rootSlice';
import { onboardingSlides, OnboardSlide } from '@/data/onboarding';
import { assets } from '@/theme';
import { styles } from './styles';

// Figma geometry per stack slot (393×852 frame) — scaled via the theme helpers.
const SLOT_SPECS = [
  { w: 340.068, h: 311.085, left: 23.3, top: 351.9, rot: 1.71, radius: 24 },
  { w: 270.422, h: 179.664, left: 46, top: 276, rot: -7.47, radius: 20 },
  { w: 200.383, h: 133.131, left: 101.61, top: 215, rot: 7.95, radius: 20 },
];
// Illustration on the front card (absolute Figma coords → made card-relative).
const ILLO_SPEC = { w: 211.417, h: 227, left: 170, top: 461 };

type SlotGeom = { w: number; h: number; left: number; top: number; rotate: string; radius: number };
type IlloGeom = { w: number; h: number; left: number; top: number };

type CardProps = {
  slide: OnboardSlide;
  slot: SlotGeom;
  slotIndex: number;
  front: boolean;
  illo: IlloGeom;
};

const OnboardingCard = ({ slide, slot, slotIndex, front, illo }: CardProps) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: slide.bg,
        width: slot.w,
        height: slot.h,
        borderRadius: 24,
        zIndex: 30 - slotIndex * 10,
        transform: [{ translateX: slot.left }, { translateY: slot.top }, { rotate: slot.rotate }],
      },
    ]}>
    {front ? (
      <>
        <Text text={slide.label} numberOfLines={1} style={styles.cardTitle} />
        <View style={styles.pill}>
          <Text text={slide.pill} style={styles.pillText} />
        </View>
        <Text text={slide.desc} style={styles.cardDesc} />
        <View style={styles.dots}>
          {onboardingSlides.map((s, di) => (
            <View key={s.key} style={[styles.dot, di === slotIndex && styles.dotActive]} />
          ))}
        </View>

        <View style={styles.star} pointerEvents="none">
          <assets.StarSvg width={26} height={26} />
        </View>
        <View style={styles.bulb} pointerEvents="none">
          <Image source={assets.Bulb} style={styles.bulbIcon} resizeMode="contain" />
        </View>

        <View
          style={[styles.illoWrap, { left: illo.left, top: illo.top, width: illo.w, height: illo.h }]}
          pointerEvents="none">
          <assets.OnboardingIllustrate width="100%" height="100%" />
        </View>
      </>
    ) : (
      <Text text={`${slide.label} ${slide.pill}`} numberOfLines={2} style={styles.backCardTitle} />
    )}
  </View>
);

const Onboarding = () => {
  const dispatch = useAppDispatch();
  const { theme } = useUnistyles();

  const slots: SlotGeom[] = SLOT_SPECS.map(s => ({
    w: theme.rw(s.w),
    h: theme.rh(s.h),
    left: theme.rw(s.left),
    // tops are made relative to the topmost (back) card so the deck sits inside the flow stack.
    top: theme.rh(s.top - SLOT_SPECS[2].top),
    rotate: theme.rotation(s.rot),
    radius: theme.rf(s.radius),
  }));
  const illo: IlloGeom = {
    w: theme.rw(ILLO_SPEC.w),
    h: theme.rh(ILLO_SPEC.h),
    left: theme.rw(ILLO_SPEC.left - SLOT_SPECS[0].left),
    top: theme.rh(ILLO_SPEC.top - SLOT_SPECS[0].top),
  };

  const login = useCallback(() => {
    dispatch(setToken('token'));
  }, [dispatch]);

  return (
    <Screen contentContainerStyle={styles.screen}>
      <View style={styles.root}>
        <assets.BackgroundVector
          width={theme.rw(828.193)}
          height={theme.rh(487.707)}
          color="#E4EAF1"
          style={styles.bgVector}
          pointerEvents="none"
        />

        <View style={styles.logo}>
          <View style={styles.logoCircle}>
            <assets.BookLogo width={theme.rf(40)} height={theme.rf(20)} />
          </View>
          <Text text="SmartLearn" style={styles.brand} />
        </View>

        <View style={styles.stack}>
          {onboardingSlides.map((slide, i) => (
            <OnboardingCard
              key={slide.key}
              slide={slide}
              slot={slots[i]}
              slotIndex={i}
              front={i === 0}
              illo={illo}
            />
          ))}
        </View>

        <View style={styles.buttons}>
          <Button text="Sign up" variant="fill" style={styles.btn} onPress={login} />
          <Button text="Log in" variant="outline" style={styles.btn} onPress={login} />
        </View>
      </View>
    </Screen>
  );
};

export default Onboarding;
