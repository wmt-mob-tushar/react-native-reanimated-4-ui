import { memo, useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';
import { colors, assets } from '@/theme';
import { Text } from '../Text';
import { styles } from './styles';

const STEP = 64;
const ARC_W = 8;
const LINE_W = 8;
const RING_R = (STEP - ARC_W) / 2;
const RING_C = RING_R * 2 * Math.PI;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export type StepStatus = 'completed' | 'active' | 'locked';

export interface StepIndicatorProps {
  /** Zero-based position of this step (also the number shown). */
  index: number;
  /** Total number of steps in the timeline. */
  total: number;
  /** Timeline progress — e.g. `2.3` fills step index 2 to 30%, `2.8` to 80%. */
  value: number;
}

export const StepIndicator = memo(({ index, total, value }: StepIndicatorProps) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const fill = clamp(value - index, 0, 1);
  const status: StepStatus = fill >= 1 ? 'completed' : fill > 0 ? 'active' : 'locked';

  const topReached = value >= index;
  const bottomComplete = value >= index + 1;
  const bottomActive = !bottomComplete && value > index;

  // Animate the green arc whenever the fill changes (and on mount, from 0).
  const animFill = useSharedValue(0);
  useEffect(() => {
    animFill.value = withTiming(fill, { duration: 500 });
  }, [fill, animFill]);
  const greenProps = useAnimatedProps(() => ({
    strokeDashoffset: RING_C - animFill.value * RING_C,
  }));

  return (
    <View style={styles.col}>
      {!isFirst && (
        <View
          style={[
            styles.lineTop,
            { backgroundColor: topReached ? colors.progressGreen : colors.timelineGray },
          ]}
        />
      )}

      {!isLast &&
        (bottomComplete ? (
          <View style={[styles.lineBottom, { backgroundColor: colors.progressGreen }]} />
        ) : bottomActive ? (
          <View style={styles.lineBottom}>
            <Svg width={LINE_W} height="100%">
              <Defs>
                <LinearGradient id={`stepGrad${index}`} x1="0" y1="0" x2="0" y2="1">
                  <Stop offset={0} stopColor={colors.progressGreen} />
                  <Stop offset={1} stopColor={colors.timelineGray} />
                </LinearGradient>
              </Defs>
              <Rect width={LINE_W} height="100%" fill={`url(#stepGrad${index})`} />
            </Svg>
          </View>
        ) : (
          <View style={[styles.lineBottom, { backgroundColor: colors.timelineGray }]} />
        ))}

      {status === 'completed' && (
        <View style={styles.completedRing}>
          <View style={styles.completedGap}>
            <View style={styles.completedCore}>
              <assets.RightIcon width={22} height={18} />
            </View>
          </View>
        </View>
      )}

      {status === 'active' && (
        <View style={styles.activeOuter}>
          <Svg width={STEP} height={STEP} style={styles.activeRingSvg}>
            {/* Gray track + green fill share one ring (no gap, no overlap). */}
            <Circle cx={STEP / 2} cy={STEP / 2} r={RING_R} stroke={colors.timelineGray} strokeWidth={ARC_W} fill="none" />
            <AnimatedCircle
              cx={STEP / 2}
              cy={STEP / 2}
              r={RING_R}
              stroke={colors.progressGreen}
              strokeWidth={ARC_W}
              strokeDasharray={RING_C}
              animatedProps={greenProps}
              strokeLinecap="round"
              fill="none"
              transform={`rotate(-90 ${STEP / 2} ${STEP / 2})`}
            />
          </Svg>
          <View style={styles.activeInner}>
            <Text text={`${index + 1}`} style={styles.number} />
          </View>
        </View>
      )}

      {status === 'locked' && (
        <View style={styles.lockedCircle}>
          <View style={styles.lockedInner}>
            <Text text={`${index + 1}`} style={[styles.number, styles.numberLocked]} />
          </View>
        </View>
      )}
    </View>
  );
});

StepIndicator.displayName = 'StepIndicator';
