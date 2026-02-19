import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type PressableScaleProps = PressableProps & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function PressableScale({
  children,
  style,
  scaleTo = 1.2,
  ...props
}: PressableScaleProps) {
  const scale = useSharedValue(1);

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));

  return (
    <AnimatedPressable
      {...props}
      onPressIn={(e) => {
        scale.value = withSpring(scaleTo, { damping: 15 });
        props.onPressIn?.(e);
      }}
      onPressOut={(e) => {
        scale.value = withSpring(1, { damping: 15 });
        props.onPressOut?.(e);
      }}
      style={style}
    >
      <Animated.View style={scaleStyle}>
        {children}
      </Animated.View>
    </AnimatedPressable>
  );
}
