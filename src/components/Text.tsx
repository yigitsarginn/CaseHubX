import React, { PropsWithChildren } from 'react';
import { Fonts } from '@/styles';
import colors from '@/styles/colors';
import { StyleSheet, TextProps } from 'react-native';
import Animated, { AnimateProps } from 'react-native-reanimated';

export type HubXTextProps = PropsWithChildren<{
  variant?: keyof typeof Fonts.size;
  color?: keyof typeof colors;
  bold?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  fontFamily?:
    | 'Rubik_300Light'
    | 'Rubik_400Regular'
    | 'Rubik_500Medium'
    | 'Rubik_600SemiBold'
    | 'Rubik_700Bold'
    | 'Rubik_800ExtraBold'
    | 'Rubik_900Black'
    | 'SFProText_Bold';
}> &
  TextProps &
  AnimateProps<Omit<TextProps, 'children'>>;

const _Text = ({
  children,
  style,
  color = 'MainText',
  letterSpacing = 0.07,
  lineHeight,
  fontFamily = 'Rubik_500Medium',
  variant = 'normal',
  ...rest
}: HubXTextProps) => {
  return (
    <Animated.Text
      {...rest}
      style={[
        styles[variant],
        {
          fontFamily,
          color: colors[color],
          letterSpacing: letterSpacing,
          lineHeight: lineHeight,
        },
        style,
      ]}>
      {children}
    </Animated.Text>
  );
};

export const Text = React.memo(_Text);

const styles = StyleSheet.create({
  ...Fonts.style,
});
