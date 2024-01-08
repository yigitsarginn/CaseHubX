import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import { rh, rs, screen } from '@/styles/helpers';
import colors from '@/styles/colors';
import { Text } from './Text';
import GradientText from './GradientText';
import { Icon } from './Icon';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { t } from '@/lang';

const PremiumBadge = ({ onPress }: TouchableOpacityProps) => {
  const offset = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: offset.value,
  }));

  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, { duration: 550 }),
      -1,
      true,
    );
  }, [offset]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.leftFooter}>
        <View>
          <Animated.View style={[animatedStyles, styles.messageSelector]}>
            <Text variant="tiny" color="White">
              {t('Onboarding.Home.one')}
            </Text>
          </Animated.View>
          <Image
            style={styles.image}
            source={require('@/../assets/images/Home/Message.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <GradientText
            colors={['#E5C990', '#E4B046']}
            numberOfLines={1}
            style={{
              fontWeight: '600',
              fontSize: rs(16),
              lineHeight: rs(21),
              letterSpacing: -0.32,
            }}>
            {t('Onboarding.Home.free_premium_available')}
          </GradientText>
          <GradientText
            colors={['#F5C25B', '#FFDE9C']}
            numberOfLines={1}
            style={{
              fontWeight: '400',
              fontSize: rs(13),
              lineHeight: rs(16),
              letterSpacing: -0.32,
              marginTop: rh(1),
            }}>
            {t('Onboarding.Home.tap_to_upgrade')}
          </GradientText>
        </View>
      </View>
      <Icon
        icon="right"
        size={rs(24)}
        color="#D0B070"
        style={{
          paddingRight: rs(12),
        }}
      />
    </TouchableOpacity>
  );
};

export default PremiumBadge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SecondaryDark,
    width: screen.width - rs(48),
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: rh(13),
    borderRadius: rs(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rh(24),
  },
  textContainer: {
    marginLeft: rs(16),
  },
  image: {
    width: rs(32),
    height: rs(24),
    marginLeft: rs(20),
  },
  leftFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageSelector: {
    position: 'absolute',
    right: rs(-4),
    top: rh(-5.77),
    zIndex: 999,
    width: rs(15),
    height: rs(15),
    backgroundColor: colors.Red90,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
