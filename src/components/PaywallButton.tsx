/* eslint-disable react-native/no-inline-styles */
import React, { memo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { t } from '@/lang';
import colors from '@/styles/colors';
import { rh, rs, screen } from '@/styles/helpers';
import { Text } from './Text';

type RadioButtonProps = {
  isActive: boolean;
};

export const RadioButton = ({ isActive = false }: RadioButtonProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: rs(20),
        height: rs(20),
        borderRadius: 100,
        backgroundColor: isActive ? colors.PrimaryGreen : colors.White15,
      }}>
      {isActive && (
        <View
          style={{
            backgroundColor: colors.White,
            width: rs(8),
            height: rs(8),
            borderRadius: 100,
          }}
        />
      )}
    </View>
  );
};

type Props = {
  popularColors: string[];
  priceElement?: React.ReactNode;
  isActive?: boolean;
  popular?: boolean;
  discount?: string;
} & TouchableOpacityProps;

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const _PaywallButton = ({
  priceElement,
  isActive = false,
  popular = false,
  discount,
  onPress,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: rs(8),
      }}>
      <AnimatedTouchableOpacity style={styles.container} onPress={onPress}>
        <LinearGradient
          colors={
            isActive
              ? ['rgba(40, 175, 110, 0.17)', 'rgba(40, 175, 110, 0)']
              : ['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.05)']
          }
          start={[1, 0]}
          end={[0, 1]}
          style={[
            styles.innerContainer,
            {
              borderColor: isActive ? colors.PrimaryGreen : colors.White40,
              borderWidth: isActive ? rs(2) : rs(1),
            },
          ]}>
          <View
            style={{
              width: '100%',
              paddingLeft: rs(15),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton isActive={isActive} />
            {priceElement}
          </View>
          {popular && (
            <View style={styles.mostPopular}>
              <Text
                color={'White'}
                fontFamily="Rubik_500Medium"
                variant="mini"
                lineHeight={rs(18)}>
                {t('Onboarding.Paywall.save', {
                  percent: `${discount}`,
                })}
              </Text>
            </View>
          )}
        </LinearGradient>
      </AnimatedTouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: rs(14),
    width: screen.width - rs(48),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: rh(10),
  },
  mostPopular: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: rs(12),
    paddingRight: rs(9),
    paddingVertical: rh(4),
    borderTopRightRadius: rs(10),
    borderBottomLeftRadius: rs(20),
    top: 0,
    right: 0,
    backgroundColor: colors.PrimaryGreen,
  },
  innerContainer: {
    paddingVertical: rh(13),
    borderRadius: rs(14),
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});

export const PaywallButton = memo(_PaywallButton);
