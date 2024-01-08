import { StyleSheet } from 'react-native';
import { rs } from './helpers';

const size = {
  big: rs(30),
  h1: rs(28),
  h2: rs(27),
  h3: rs(24),
  h4: rs(20),
  h5: rs(17),
  mediumPlus: rs(16),
  medium: rs(15.5),
  normal: rs(15),
  small: rs(13),
  mini: rs(12),
  xmini: rs(11),
  xxmini: rs(10),
  tiny: rs(9),
};

const style = StyleSheet.create({
  big: {
    fontSize: size.big,
    lineHeight: rs(46.8),
  },
  h1: {
    fontSize: size.h1,
    lineHeight: rs(33.18),
  },
  h2: {
    fontSize: size.h2,
    lineHeight: rs(32),
  },
  h3: {
    fontSize: size.h3,
    lineHeight: rs(28),
  },
  h4: {
    fontSize: size.h4,
    lineHeight: rs(24),
  },
  h5: {
    fontSize: size.h5,
    lineHeight: rs(24),
  },
  mediumPlus: {
    fontSize: size.mediumPlus,
    lineHeight: rs(18.96),
  },
  medium: {
    fontSize: size.medium,
  },
  normal: {
    fontSize: size.normal,
    lineHeight: rs(24),
  },
  small: {
    fontSize: size.small,
    lineHeight: rs(18),
  },
  mini: {
    fontSize: size.mini,
    lineHeight: rs(14.22),
  },
  xmini: {
    fontSize: size.xmini,
    lineHeight: rs(15),
  },
  xxmini: {
    fontSize: size.xxmini,
    lineHeight: rs(15),
  },
  tiny: {
    fontSize: size.tiny,
    lineHeight: rs(15),
  },
});

export default {
  size,
  style,
};
