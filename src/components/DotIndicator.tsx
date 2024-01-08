/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { rs } from '@/styles/helpers';
import colors from '@/styles/colors';
import Animated, { FadeIn } from 'react-native-reanimated';

const _DotIndicator = ({ activeDot }: { activeDot: number }) => {
  return (
    <Animated.View style={styles.container} entering={FadeIn}>
      <View
        style={[
          {
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: colors.Dark20,
          },
          styles.dot,
        ]}>
        {activeDot === 0 && (
          <Animated.View
            entering={FadeIn}
            style={[
              {
                backgroundColor: colors.Black70,
              },
              styles.dot,
            ]}
          />
        )}
      </View>
      <View
        style={[
          {
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: colors.Dark20,
          },
          styles.dot,
        ]}>
        {activeDot === 1 && (
          <Animated.View
            entering={FadeIn}
            style={[
              {
                backgroundColor: colors.GrayishGreen,
              },
              styles.dot,
            ]}
          />
        )}
      </View>
      <View
        style={[
          {
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: colors.Dark20,
          },
          styles.dot,
        ]}>
        {activeDot === 2 && (
          <Animated.View
            entering={FadeIn}
            style={[
              {
                backgroundColor: colors.GrayishGreen,
              },
              styles.dot,
            ]}
          />
        )}
      </View>
    </Animated.View>
  );
};

export const DotIndicator = React.memo(_DotIndicator);

const styles = StyleSheet.create({
  container: {
    marginTop: rs(15),
    marginBottom: rs(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: rs(10),
  },

  dot: {
    width: rs(10),
    height: rs(10),
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
