import React, { useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Circle, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  withTiming,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import { colors } from '@/theme';
import { Text } from '../Text';
import { styles } from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface StepIndicatorProps {
  status: 'completed' | 'active' | 'locked' | 'faded';
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
}

const TimelineLine = ({ color }: { color: string | 'gradient' }) => {
  if (color === 'gradient') {
    return (
      <View style={styles.gradientLineContainer}>
        <Svg width={4} height="100%">
          <Defs>
            <LinearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor={colors.palette.progressGreen} />
              <Stop offset="100%" stopColor={colors.palette.timelineGray} />
            </LinearGradient>
          </Defs>
          <Rect x={0} y={0} width={4} height="100%" fill="url(#lineGrad)" />
        </Svg>
      </View>
    );
  }

  return <View style={[styles.verticalLine, { backgroundColor: color }]} />;
};

export const StepIndicator = ({ status, index, isFirst = false, isLast = false }: StepIndicatorProps) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withDelay(index * 200, withSpring(1));
  }, [index, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // Unconditional hooks for active state
  const size = 38;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progressShared = useSharedValue(0);

  useEffect(() => {
    if (status === 'active') {
      progressShared.value = withDelay(index * 250, withTiming(75, { duration: 1000 }));
    }
  }, [index, status, progressShared]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference - (progressShared.value / 100) * circumference;
    return {
      strokeDashoffset,
    };
  });

  const renderNode = () => {
    if (status === 'completed') {
      return (
        <Animated.View style={[styles.indicatorContainer, animatedStyle]}>
          <View style={styles.completedCircle}>
            <Icon name="checkmark" size={18} color={colors.palette.neutral100} />
          </View>
        </Animated.View>
      );
    }

    if (status === 'active') {
      return (
        <Animated.View style={[styles.indicatorContainer, animatedStyle]}>
          <View style={styles.activeCircleWrapper}>
            <Svg width={size} height={size} style={styles.activeCircleSvg}>
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={colors.palette.timelineGray}
                strokeWidth={strokeWidth}
                fill="none"
              />
              <AnimatedCircle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={colors.palette.progressGreen}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                animatedProps={animatedProps}
                strokeLinecap="round"
                fill="none"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            </Svg>
            <View style={styles.activeCircleInner}>
              <Text text="2" style={styles.indicatorNumberText} />
            </View>
          </View>
        </Animated.View>
      );
    }

    const isFaded = status === 'faded';
    return (
      <Animated.View style={[styles.indicatorContainer, animatedStyle]}>
        <View style={[styles.lockedCircle, isFaded && styles.fadedIndicator]}>
          <Text text={`${index + 1}`} style={[styles.indicatorNumberText, styles.lockedIndicatorText]} />
        </View>
      </Animated.View>
    );
  };

  // Determine line color states based on actual index conditions
  let topColor: string | 'gradient' | null = null;
  let bottomColor: string | 'gradient' | null = null;

  if (!isFirst) {
    if (index === 1) {
      topColor = colors.palette.progressGreen;
    } else if (index === 2) {
      topColor = 'gradient';
    } else {
      topColor = colors.palette.timelineGray;
    }
  }

  if (!isLast) {
    if (index === 0) {
      bottomColor = colors.palette.progressGreen;
    } else if (index === 1) {
      bottomColor = 'gradient';
    } else {
      bottomColor = colors.palette.timelineGray;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.connectorContainer}>
        {topColor && <TimelineLine color={topColor} />}
      </View>
      {renderNode()}
      <View style={styles.connectorContainer}>
        {bottomColor && <TimelineLine color={bottomColor} />}
      </View>
    </View>
  );
};
