import colors from '@/styles/colors';
import { rh, rs, screen } from '@/styles/helpers';
import React, { memo } from 'react';
import {
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from './Text';
import { Category } from '@/types';

type Props = {
  item: Category;
} & TouchableOpacityProps;

const CARD_WIDTH = screen.width / 2 - rs(30);
const CARD_HEIGHT = screen.height * 0.1872;

const _CategoriesItem = ({ item, onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Image
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        }}
        source={{ uri: item.image.url }}
      />
      <View style={styles.title}>
        <Text
          numberOfLines={2}
          fontFamily="Rubik_500Medium"
          color="MainText"
          lineHeight={rs(21)}
          letterSpacing={rs(-0.32)}
          style={{ padding: rs(16) }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: rh(16),
    borderWidth: 0.5,
    borderColor: colors.SecondaryGreen18,
    borderRadius: rs(12),
    overflow: 'hidden',
    width: CARD_WIDTH,
    backgroundColor: '#F4F6F6',
  },
  title: {
    position: 'absolute',
    width: CARD_WIDTH,
    top: 0,
    maxWidth: CARD_WIDTH / 1.6,
  },
});

export const CategoriesItem = memo(_CategoriesItem);
