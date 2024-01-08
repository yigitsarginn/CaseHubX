import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { rh, rs, screen } from '@/styles/helpers';
import SlidingCarousel from '@/components/SlidingCarousel';
import { Text } from '@/components/Text';
import colors from '@/styles/colors';
import { PaywallButton } from '@/components/PaywallButton';
import { t } from '@/lang';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppNavigation } from '@/utils/useAppNavigation';
import { AppSliceActions } from '@/store/app.slice';
import { useAppDispatch } from '@/store';

const CHARS = [
  {
    title: 'Unlimited',
    subtitle: 'Plant Identify',
    image: require('@/../assets/images/Onboarding/Paywall/scanner.png'),
  },
  {
    title: 'Faster',
    subtitle: 'Process',
    image: require('@/../assets/images/Onboarding/Paywall/speedometer.png'),
  },
  {
    title: 'Detailed',
    subtitle: 'Plant care',
    image: require('@/../assets/images/Onboarding/Paywall/scanner.png'),
  },
];

export const entries = Object.entries as <T>(
  obj: T,
) => Array<[keyof T, T[keyof T]]>;

const Paywall = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [activePackage, setActivePackage] = useState<'ANNUAL' | 'MONTHLY'>(
    'ANNUAL',
  );

  const renderOfferings = useCallback(() => {
    const mockPackages = {
      ANNUAL: {
        product: {
          subscriptionPeriod: 'P1Y',
          priceString: '$2.99/month, auto renewable',
        },
      },
      MONTHLY: {
        product: {
          subscriptionPeriod: 'P1M',
          priceString: 'First 3 days free, then $529,99/year',
        },
      },
    };

    const packagesEntries = entries(mockPackages).reverse();

    return packagesEntries.map(([type, pkg]) => {
      const title =
        pkg.product.subscriptionPeriod === 'P1M'
          ? t('Onboarding.Paywall.monthly')
          : t('Onboarding.Paywall.annual');

      const isPopular = type === 'ANNUAL';

      return (
        <PaywallButton
          key={type}
          popularColors={[colors.Dark60, colors.Black24]}
          isActive={activePackage === type}
          onPress={() => {
            setActivePackage(type);
          }}
          popular={isPopular}
          discount={'50'}
          priceElement={
            <View style={{ marginLeft: rs(12) }}>
              <Text
                numberOfLines={1}
                fontFamily="Rubik_500Medium"
                variant="mediumPlus"
                color={'White'}
                lineHeight={rs(18.96)}>
                {title}
              </Text>
              <Text
                numberOfLines={1}
                style={{ marginTop: rh(1) }}
                fontFamily="Rubik_300Light"
                variant="mini"
                color={'White70'}>
                {pkg.product.priceString}
              </Text>
            </View>
          }
        />
      );
    });
  }, [activePackage]);

  const closePaywall = useCallback(() => {
    dispatch(AppSliceActions.setHasSeenOnboarding(true));
    navigation.navigate('BottomTab', { screen: 'Home' });
  }, [navigation, dispatch]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.PaywallBackground }}>
      <ImageBackground
        style={{
          width: '100%',
          height: screen.height * 0.6034,
        }}
        source={require('@/../assets/images/Onboarding/Paywall/Paywall.png')}>
        <TouchableOpacity
          onPress={closePaywall}
          style={{
            zIndex: 1,
            position: 'absolute',
            marginTop: top + rh(8),
            right: rs(19),
            width: rs(24),
            height: rs(24),
            borderRadius: rs(12),
            backgroundColor: colors.Black40,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}>
          <Icon icon="close" color={colors.White} size={rs(12)} />
        </TouchableOpacity>

        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            paddingHorizontal: rs(24),
          }}>
          <View style={styles.titleContainer}>
            <Text
              numberOfLines={1}
              fontFamily="Rubik_800ExtraBold"
              color="White"
              variant="h1"
              style={{
                maxWidth: screen.width / 2 - rs(24),
              }}>
              {t('Onboarding.Paywall.plant_app')}
            </Text>
            <Text
              numberOfLines={1}
              fontFamily="Rubik_300Light"
              color="White"
              variant="h3"
              style={{
                maxWidth: screen.width / 2 - rs(24),
              }}>
              {t('Onboarding.Paywall.premium')}
            </Text>
          </View>
          <Text
            lineHeight={rs(24)}
            numberOfLines={1}
            fontFamily="Rubik_300Light"
            color="White70"
            variant="h5"
            letterSpacing={0.38}>
            {t('Onboarding.Paywall.access_all_features')}
          </Text>
        </View>
        <SlidingCarousel
          style={{ flex: 1, alignItems: 'center' }}
          infinite={true}
          time={14000}>
          {CHARS.slice(0, 5).map((char, index) => {
            return (
              <View key={index}>
                <View style={styles.layoutContainer}>
                  <View style={styles.iconWrapper}>
                    <Image source={char.image} style={styles.icon} />
                  </View>
                  <Text
                    style={{ marginTop: rh(16) }}
                    numberOfLines={1}
                    variant="h4"
                    fontFamily="Rubik_500Medium"
                    color="White"
                    lineHeight={rs(24)}
                    letterSpacing={0.38}>
                    {char.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: rh(4),
                    }}
                    numberOfLines={1}
                    fontFamily="Rubik_400Regular"
                    color="White70"
                    variant="small"
                    lineHeight={rs(18)}
                    letterSpacing={-0.08}>
                    {char.subtitle}
                  </Text>
                </View>
              </View>
            );
          })}
        </SlidingCarousel>
      </ImageBackground>
      <View style={styles.flexContainer}>{renderOfferings()}</View>
      <View style={{ flex: 0.5 }}>
        <Button style={styles.button} onPress={() => {}}>
          <Text
            fontFamily="Rubik_500Medium"
            numberOfLines={1}
            color="White"
            variant="mediumPlus"
            lineHeight={rs(24)}
            letterSpacing={-0.24}>
            {t('Onboarding.Paywall.try_free_three_days')}
          </Text>
        </Button>
        <Text
          numberOfLines={2}
          fontFamily="Rubik_300Light"
          variant="tiny"
          color="White52"
          style={styles.info}>
          {t('Onboarding.Paywall.after_the_three_day')}
        </Text>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text
              fontFamily="Rubik_400Regular"
              color="White50"
              variant="xmini"
              lineHeight={13.04}>
              {t('Onboarding.Paywall.terms')}
            </Text>
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            fontFamily="Rubik_400Regular"
            color="White50"
            variant="xmini"
            lineHeight={13.04}>
            {' • '}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              numberOfLines={1}
              fontFamily="Rubik_400Regular"
              color="White50"
              variant="xmini"
              lineHeight={13.04}
              style={{}}>
              {t('Onboarding.Paywall.privacy')}
            </Text>
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            fontFamily="Rubik_400Regular"
            color="White50"
            variant="xmini"
            lineHeight={13.04}>
            {' • '}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text
              numberOfLines={1}
              fontFamily="Rubik_400Regular"
              color="White50"
              variant="xmini"
              lineHeight={13.04}>
              {t('Onboarding.Paywall.restore')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({
  layoutContainer: {
    width: screen.width / 2 - rs(32),
    backgroundColor: colors.White08,
    marginHorizontal: rs(4),
    paddingHorizontal: rs(16),
    paddingVertical: rh(16),
    borderRadius: rs(14),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  icon: {
    width: rs(18),
    height: rs(18),
  },
  iconWrapper: {
    backgroundColor: colors.Black24,
    width: rs(36),
    height: rs(36),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rs(8),
  },
  flexContainer: {
    flex: 0.5,
  },
  button: {
    paddingVertical: rh(14),
    width: screen.width - rs(48),
    alignSelf: 'center',
    marginTop: rh(14),
  },
  info: {
    textAlign: 'center',
    paddingHorizontal: rs(24),
    marginTop: rh(8),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: rh(10),
  },
  close: {},
});
