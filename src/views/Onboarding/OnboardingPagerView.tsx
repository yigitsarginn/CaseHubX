/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Image } from 'react-native';
import React, { memo, useState } from 'react';
import { rh, rs, screen } from '@/styles/helpers';
import { t } from '@/lang';

import { DotIndicator } from '@/components/DotIndicator';
import PagerView from 'react-native-pager-view';
import Animated, {
  FadeIn,
  FadeOut,
  LightSpeedInLeft,
} from 'react-native-reanimated';
import { useAppNavigation } from '@/utils/useAppNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';

const PHONE_HEIGHT = screen.height * 0.665;
const PHONE_WIDTH = PHONE_HEIGHT * 0.483;

const _OnboardingPagerView = () => {
  const { top, bottom } = useSafeAreaInsets();
  const pagerRef = React.useRef<PagerView>(null);
  const navigation = useAppNavigation();
  const [currentPage, setCurrentPage] = useState<{
    offset: number;
    position: number;
  }>({
    offset: 0,
    position: 0,
  });

  const nextButton = () => {
    if (currentPage.position === 1) {
      navigation.navigate('Onboarding', {
        screen: 'Paywall',
      });
    } else {
      pagerRef.current?.setPage(currentPage.position + 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(400)}
        style={[styles.container, { top: top }]}>
        <PagerView
          ref={pagerRef}
          onPageScroll={e => {
            setCurrentPage(e.nativeEvent);
          }}
          style={{ flex: 1 }}
          initialPage={0}
          orientation="horizontal">
          <View
            key={0}
            style={{
              flex: 1,
            }}>
            <View style={[styles.titleContainer, { marginTop: rh(12) }]}>
              <Text
                style={{
                  maxWidth: screen.width * 0.8,
                }}
                lineHeight={rs(33.18)}
                letterSpacing={-1}
                numberOfLines={1}
                fontFamily="Rubik_500Medium"
                color="Black"
                variant="h1">
                {t('Onboarding.PagerView.take_a_photo')}{' '}
              </Text>
              <View>
                <Animated.Image
                  entering={LightSpeedInLeft.duration(400).delay(400)}
                  source={require('@/../assets/images/Onboarding/PagerView/Object.png')}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    marginTop: rh(30),
                  }}
                />
                <Text
                  letterSpacing={-1}
                  style={{
                    maxWidth: screen.width / 2 - rs(24),
                  }}
                  lineHeight={rs(33.18)}
                  numberOfLines={1}
                  fontFamily="Rubik_800ExtraBold"
                  color="Black"
                  variant="h1">
                  {t('Onboarding.PagerView.identify')}
                </Text>
              </View>
            </View>
            <Text
              letterSpacing={-1}
              style={{
                maxWidth: screen.width / 2,
                paddingHorizontal: rs(24),
              }}
              lineHeight={rs(33.18)}
              numberOfLines={1}
              fontFamily="Rubik_500Medium"
              color="Black"
              variant="h1">
              {t('Onboarding.PagerView.the_plant')}
            </Text>
            <View
              style={{
                width: '100%',
                flex: 1,
              }}>
              <Image
                source={require('@/../assets/images/Onboarding/PagerView/Content.png')}
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  width: screen.height * 0.465,
                  height: screen.height * 0.785,
                  marginTop: rh(30),
                }}
              />
            </View>
          </View>
          <View
            key={1}
            style={{
              flex: 1,
            }}>
            <View style={[styles.titleContainer, { marginTop: rh(12) }]}>
              <Text
                style={{
                  maxWidth: screen.width * 0.8,
                }}
                lineHeight={rs(33.18)}
                letterSpacing={-1}
                numberOfLines={1}
                fontFamily="Rubik_500Medium"
                color="Black"
                variant="h1">
                {t('Onboarding.PagerView.get_plant')}{' '}
              </Text>
              <View>
                <Image
                  source={require('@/../assets/images/Onboarding/PagerView/Object.png')}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    marginTop: rh(30),
                  }}
                />
                <Text
                  letterSpacing={-1}
                  style={{
                    maxWidth: screen.width / 2 - rs(24),
                  }}
                  lineHeight={rs(33.18)}
                  numberOfLines={1}
                  fontFamily="Rubik_800ExtraBold"
                  color="Black"
                  variant="h1">
                  {t('Onboarding.PagerView.care_guides')}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flex: 1,
                marginTop: rh(19),
              }}>
              <Image
                source={require('@/../assets/images/Onboarding/PagerView/FlatiPhone.png')}
                style={{
                  bottom: -rh(60),
                  position: 'absolute',
                  alignSelf: 'center',
                  height: PHONE_HEIGHT,
                  width: PHONE_WIDTH,
                }}
              />
              <Image
                source={require('@/../assets/images/Onboarding/PagerView/Artwork.png')}
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  alignSelf: 'center',
                  width: screen.width,
                  height: screen.width * 0.6655,
                  marginTop: rh(30),
                }}
              />

              <Image
                source={require('@/../assets/images/Onboarding/PagerView/BgObject.png')}
                style={{
                  zIndex: -1,
                  position: 'absolute',
                  alignSelf: 'center',
                  width: screen.width + rs(42),
                  height: screen.width * 1.1355,
                }}
              />
            </View>
          </View>
        </PagerView>
        <Button
          style={{
            marginHorizontal: rs(24),
          }}
          onPress={nextButton}>
          <Text
            numberOfLines={1}
            style={{ textAlign: 'center', paddingHorizontal: rs(24) }}
            fontFamily="Rubik_400Regular"
            color="White"
            variant="mediumPlus">
            {t('Onboarding.Welcome.get_started')}
          </Text>
        </Button>
        <View
          style={{
            flex: 0.15,
            justifyContent: 'center',
            marginBottom: bottom + rh(12),
          }}>
          <DotIndicator activeDot={currentPage.position} />
        </View>
      </Animated.View>
    </View>
  );
};

export const OnboardingPagerView = memo(_OnboardingPagerView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: rs(24),
  },
});
