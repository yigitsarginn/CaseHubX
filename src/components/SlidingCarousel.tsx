import React, { useState, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type Props = {
  /**
   * Time in milliseconds
   * idk what this time stands for but you can give 14000
   * :)
   */
  time: number;
  infinite?: boolean;
} & ViewProps;

/**
 * A carousel component that autoslides its children
 */
// ...

function SlidingCarousel({
  style,
  time,
  children,
  infinite = false,
  ...rest
}: PropsWithChildren<Props>) {
  const [contentWidth, setContentWidth] = useState(0);

  const repeatCount = infinite ? Infinity : 1;

  const translateX1 = useDerivedValue(() => {
    return withRepeat(
      withSequence(
        withTiming(-20, {
          easing: Easing.linear,
          duration: 0,
        }),
        withTiming(-contentWidth - 20, {
          easing: Easing.linear,
          duration: time,
        }),
        withTiming(contentWidth - 20, {
          duration: 0,
          easing: Easing.linear,
        }),
        withTiming(-20, {
          duration: time,
          easing: Easing.linear,
        }),
      ),
      repeatCount,
      false,
    );
  }, [contentWidth, repeatCount]);

  const translateX2 = useDerivedValue(() => {
    return withRepeat(
      withSequence(
        withTiming(contentWidth - 20, {
          duration: 0,
          easing: Easing.linear,
        }),
        withTiming(-20, {
          duration: time,
          easing: Easing.linear,
        }),
        withTiming(-contentWidth - 20, {
          duration: time,
          easing: Easing.linear,
        }),
        withTiming(contentWidth - 20, {
          duration: 0,
          easing: Easing.linear,
        }),
      ),
      repeatCount,
      false,
    );
  }, [contentWidth, repeatCount]);

  const style1 = useAnimatedStyle(
    () => ({
      transform: [{ translateX: 1 * translateX1.value }],
    }),
    [translateX1.value],
  );
  const style2 = useAnimatedStyle(
    () => ({
      transform: [{ translateX: 1 * translateX2.value }],
    }),
    [translateX2.value],
  );

  return (
    <View style={[style, styles.container]} {...rest}>
      <Animated.View
        onLayout={event => {
          setContentWidth(event.nativeEvent.layout.width);
        }}
        style={[styles.content, style1]}>
        {children}
      </Animated.View>
      <Animated.View style={[styles.content, style2]}>{children}</Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  },
});

export default SlidingCarousel;
