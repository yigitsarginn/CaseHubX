import React from 'react';
import IcoMoon from 'react-icomoon';
import { Svg, Path, SvgProps } from 'react-native-svg';
import iconSet from '@/../assets/icons.json';
import { View } from 'react-native';
import { rs } from '@/styles/helpers';
import { Colors } from '@/styles';

type Props = {
  icon: string;
  style?: SvgProps['style'];
  color?: string;
  size?: number;
} & SvgProps;

const _Icon = ({ icon, style, color = Colors.White, size }: Props) => {
  const fontSize = size ?? rs(24);

  return (
    <View style={style}>
      <IcoMoon
        icon={icon}
        iconSet={iconSet}
        native
        SvgComponent={Svg}
        PathComponent={Path}
        size={fontSize}
        color={color}
      />
    </View>
  );
};

export const Icon = React.memo(_Icon);
