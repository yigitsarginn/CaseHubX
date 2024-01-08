export { default as Colors } from './colors';
export { default as Spacing } from './spacing';
export { default as Fonts } from './fonts';

import { ViewStyle } from 'react-native';
import Spacing from './spacing';

export type SpacingStyle = {
  m?: keyof typeof Spacing;
  mt?: keyof typeof Spacing;
  mr?: keyof typeof Spacing;
  mb?: keyof typeof Spacing;
  ml?: keyof typeof Spacing;
  mx?: keyof typeof Spacing;
  my?: keyof typeof Spacing;
  p?: keyof typeof Spacing;
  pt?: keyof typeof Spacing;
  pr?: keyof typeof Spacing;
  pb?: keyof typeof Spacing;
  pl?: keyof typeof Spacing;
  px?: keyof typeof Spacing;
  py?: keyof typeof Spacing;
  w?: number | string;
  h?: number | string;
} & {};

export function normalizeSpacing(props: SpacingStyle) {
  const { m, p, mt, mb, ml, mr, pt, pb, pl, pr, mx, my, py, px, w, h } = props;

  return {
    ...(m && { margin: Spacing[m] }),
    ...(p && { padding: Spacing[p] }),
    ...(mt && { marginTop: Spacing[mt] }),
    ...(mb && { marginBottom: Spacing[mb] }),
    ...(ml && { marginLeft: Spacing[ml] }),
    ...(mr && { marginRight: Spacing[mr] }),
    ...(pt && { paddingTop: Spacing[pt] }),
    ...(pb && { paddingBottom: Spacing[pb] }),
    ...(pl && { paddingLeft: Spacing[pl] }),
    ...(pr && { paddingRight: Spacing[pr] }),
    ...(mx && {
      marginLeft: Spacing[mx],
      marginRight: Spacing[mx],
    }),
    ...(my && {
      marginTop: Spacing[my],
      marginBottom: Spacing[my],
    }),
    ...(px && {
      paddingLeft: Spacing[px],
      paddingRight: Spacing[px],
    }),
    ...(py && {
      paddingTop: Spacing[py],
      paddingBottom: Spacing[py],
    }),
    ...(w && { width: w }),
    ...(h && { height: h }),
  } as ViewStyle;
}
