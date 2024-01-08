/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Pressable, TouchableOpacity, View } from 'react-native';
import React, { memo, useMemo } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { rh, rs, screen } from '@/styles/helpers';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import colors from '@/styles/colors';
import { Colors } from '@/styles';
import { Icon } from './Icon';
import { Text } from './Text';

const _BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();

  const routes = useMemo(() => {
    return state.routes.map(route => {
      switch (route.name) {
        case 'Home':
          return {
            name: 'Home',
            icon: 'home',
          };
        case 'Diagnose':
          return {
            name: 'Diagnose',
            icon: 'diagnose',
          };
        case 'MyGarden':
          return {
            name: 'MyGarden',
            icon: 'my-garden',
          };
        case 'Profile':
          return {
            name: 'Profile',
            icon: 'profile',
          };

        default:
          return {
            name: 'Home',
            icon: 'key',
            onPress: () => {},
          };
      }
    });
  }, [state.routes]);

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      {routes.slice(0, 2).map(route => (
        <View
          key={route.name}
          style={{
            alignItems: 'center',
            width: screen.width / 5,
          }}>
          <Pressable
            style={{
              padding: rh(8),
              alignItems: 'center',

              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate(route.name);
            }}
            key={route.name}>
            <Icon
              icon={route.icon}
              size={rs(24)}
              color={
                route.name === state.routeNames[state.index]
                  ? Colors.PrimaryGreen
                  : Colors.SecondaryGray
              }
            />
            <Text
              fontFamily="Rubik_400Regular"
              variant="xxmini"
              letterSpacing={-0.24}
              lineHeight={rs(11.85)}
              style={{
                textAlign: 'center',
                marginTop: rh(4.87),
              }}
              color={
                route.name === state.routeNames[state.index]
                  ? 'PrimaryGreen'
                  : 'Gray'
              }>
              {route.name}
            </Text>
          </Pressable>
        </View>
      ))}
      {/* § Button */}
      <TouchableOpacity
        style={{
          borderRadius: rs(99),
          backgroundColor: colors.PrimaryGreen,
          width: rs(60),
          height: rs(60),
          top: -rh(23),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: rs(4),
          borderColor: colors.LightGreen,
        }}
        onPress={() => {}}>
        <Icon icon="scan" size={rs(25)} color={Colors.White} />
      </TouchableOpacity>
      {routes.slice(2, 4).map(route => (
        <Animated.View
          key={route.name}
          style={{
            alignItems: 'center',
            width: screen.width / 5,
          }}>
          <Pressable
            style={{
              padding: rh(8),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate(route.name);
            }}
            key={route.name}>
            <Icon
              icon={route.icon}
              size={rs(25)}
              color={
                route.name === state.routeNames[state.index]
                  ? Colors.PrimaryGreen
                  : Colors.SecondaryGray
              }
            />
            <Text
              fontFamily="Rubik_400Regular"
              variant="xxmini"
              letterSpacing={-0.24}
              lineHeight={rs(11.85)}
              style={{
                textAlign: 'center',
                marginTop: rh(4.87),
              }}
              color={
                route.name === state.routeNames[state.index]
                  ? 'PrimaryGreen'
                  : 'Gray'
              }>
              {route.name}
            </Text>
          </Pressable>
        </Animated.View>
      ))}
    </View>
  );
};

export const BottomTabBar = memo(_BottomTabBar);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rh(4),
    backgroundColor: colors.White,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
