import { Colors } from '@/styles';
import { rh, rs } from '@/styles/helpers';
import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type Props = PropsWithChildren<{
  variant?: 'primary';
}> &
  TouchableOpacityProps;

export function Button({
  children,
  variant = 'primary',
  style,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, styles[variant], style]}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rs(12),
    paddingVertical: rh(16),
  },
  primary: {
    backgroundColor: Colors.PrimaryGreen,
  },
  secondary: {
    backgroundColor: Colors.Dark10,
  },
  text: {
    backgroundColor: 'transparent',
  },
});
