/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback } from 'react';
import { Text } from '@/components/Text';
import { t } from '@/lang';
import { rh, rs, screen } from '@/styles/helpers';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { useAppNavigation } from '@/utils/useAppNavigation';

const PLANT_HEIGHT = screen.height * 0.6145;
const PLANT_WIDTH = PLANT_HEIGHT * 0.7425;

const First = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useAppNavigation();

  const navigatePagerView = useCallback(() => {
    navigation.navigate('Onboarding', {
      screen: 'OnboardingPagerView',
    });
  }, [navigation]);

  return (
    <ImageBackground
      source={require('@/../assets/images/Onboarding/GetStarted/Background.png')}
      style={[styles.container, {}]}>
      <View style={[styles.titleContainer, { marginTop: top + rh(12) }]}>
        <Text
          style={styles.leftTitle}
          numberOfLines={1}
          fontFamily="Rubik_300Light"
          variant="h1">
          {t('Onboarding.Welcome.welcome_to')}{' '}
        </Text>
        <Text
          style={styles.rightTitle}
          numberOfLines={1}
          fontFamily="Rubik_500Medium"
          variant="h1">
          {t('Onboarding.Welcome.plant_app')}
        </Text>
      </View>
      <Text
        numberOfLines={2}
        style={styles.subtitle}
        fontFamily="Rubik_300Light"
        color="MainText70"
        variant="mediumPlus">
        {t('Onboarding.Welcome.identify_more_than')}
      </Text>
      <Image
        source={require('@/../assets/images/Onboarding/GetStarted/Plant.png')}
        style={styles.image}
      />
      <Button onPress={navigatePagerView}>
        <Text
          numberOfLines={1}
          style={styles.buttonText}
          fontFamily="Rubik_400Regular"
          color="White"
          variant="mediumPlus">
          {t('Onboarding.Welcome.get_started')}
        </Text>
      </Button>
      <Text
        numberOfLines={1}
        fontFamily="Rubik_400Regular"
        color="GrayishGreen70"
        variant="xmini"
        lineHeight={rs(15)}
        style={{
          alignSelf: 'center',
          marginTop: rh(17),
        }}>
        {t('Onboarding.Welcome.my_tapping_next')}
      </Text>
      <View style={styles.bottomSublineWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <Text
            fontFamily="Rubik_400Regular"
            color="GrayishGreen70"
            variant="xmini"
            lineHeight={rs(15)}
            style={styles.underlineButton}>
            {t('Onboarding.Welcome.terms_of_use')}
          </Text>
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          fontFamily="Rubik_400Regular"
          color="GrayishGreen70"
          variant="xmini"
          lineHeight={rs(15)}>
          {' & '}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            numberOfLines={1}
            fontFamily="Rubik_400Regular"
            color="GrayishGreen70"
            variant="xmini"
            lineHeight={15}
            style={styles.underlineButton}>
            {t('Onboarding.Welcome.privacy_policy')}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: rs(24),
  },
  titleContainer: {
    flexDirection: 'row',
  },
  subtitle: {
    paddingRight: rs(51),
    marginTop: rh(12),
  },
  bottomSublineWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  underlineButton: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  leftTitle: {
    maxWidth: screen.width / 2,
  },
  rightTitle: {
    maxWidth: screen.width / 2 - rs(24),
  },
  image: {
    marginTop: rh(24),
    height: PLANT_HEIGHT,
    width: PLANT_WIDTH,
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    paddingHorizontal: rs(24),
  },
});
