import React from 'react';
import { useAppSelector } from '@/store';
import First from './views/Onboarding/Welcome';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paywall from './views/Onboarding/Paywall';
import { OnboardingPagerView } from './views/Onboarding/OnboardingPagerView';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Profile from './views/BottomTab/Profile';
import { useMemo } from 'react';
import { BottomTabBar } from './components/BottomTabBar';
import Diagnose from './views/BottomTab/Diagnose';
import MyGarden from './views/BottomTab/MyGarden';
import Home from './views/BottomTab/Home';

export type RootStackParamList = {
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  BottomTab: NavigatorScreenParams<BottomTabParams>;
};

export type OnboardingStackParamList = {
  Welcome: undefined;
  OnboardingPagerView: undefined;
  Paywall: undefined;
};
export type BottomTabParams = {
  Home: undefined;
  Diagnose: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();

const renderBottomTabBar = (props: BottomTabBarProps) => {
  return <BottomTabBar {...props} />;
};

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      tabBar={renderBottomTabBar}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name={'Home'} component={Home} />
      <BottomTab.Screen name={'Diagnose'} component={Diagnose} />
      <BottomTab.Screen name={'MyGarden'} component={MyGarden} />
      <BottomTab.Screen name={'Profile'} component={Profile} />
    </BottomTab.Navigator>
  );
};

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <OnboardingStack.Screen options={{}} name="Welcome" component={First} />
      <OnboardingStack.Screen
        options={{}}
        name="OnboardingPagerView"
        component={OnboardingPagerView}
      />
      <OnboardingStack.Screen options={{}} name="Paywall" component={Paywall} />
    </OnboardingStack.Navigator>
  );
};

export const RootNavigator = () => {
  const hasSeenOnboarding = useAppSelector(
    state => state.app.hasSeenOnboarding,
  );

  const initialRouteName = useMemo(() => {
    if (!hasSeenOnboarding) {
      return 'Onboarding';
    } else {
      return 'BottomTab';
    }
  }, [hasSeenOnboarding]);

  return (
    <RootStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Onboarding" component={OnboardingNavigator} />
      <RootStack.Screen
        options={{
          gestureEnabled: false,
        }}
        name="BottomTab"
        component={BottomTabNavigation}
      />
    </RootStack.Navigator>
  );
};
