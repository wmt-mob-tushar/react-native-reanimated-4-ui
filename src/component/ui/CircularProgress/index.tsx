import React, { useEffect } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { Text } from '../Text';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progress: number;
  color: string;
  backgroundColor: string;
  showText?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

export const CircularProgress = ({
  size,
  strokeWidth,
  progress,
  color,
  backgroundColor,
  showText = true,
  textStyle,
  style,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progressShared = useSharedValue(0);

  useEffect(() => {
    progressShared.value = withTiming(progress, { duration: 1500 });
  }, [progress, progressShared]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference - (progressShared.value / 100) * circumference;
    return {
      strokeDashoffset,
    };
  });

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      {showText && (
        <View style={StyleSheet.absoluteFill}>
          <View style={styles.textWrapper}>
            <Text text={`${progress}%`} style={[styles.text, textStyle]} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});
