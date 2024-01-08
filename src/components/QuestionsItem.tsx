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
import { Question } from '@/types';

type Props = {
  item: Question;
} & TouchableOpacityProps;

const CARD_WIDTH = screen.height * 0.3079;
const CARD_HEIGHT = screen.height * 0.202;

const _QuestionsItem = ({ item, onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Image style={styles.image} source={{ uri: item.image_uri }} />
      <View style={styles.textContainer}>
        <Text
          fontFamily="Rubik_500Medium"
          color="White"
          variant="normal"
          lineHeight={rs(20)}
          letterSpacing={-0.24}
          style={styles.text}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: rs(12),
    overflow: 'hidden',
    width: CARD_WIDTH,
  },
  text: {
    paddingHorizontal: rs(14),
    paddingTop: rh(11),
    paddingBottom: rh(13),
  },
  textContainer: {
    position: 'absolute',
    width: CARD_WIDTH,
    bottom: 0,
    borderColor: colors.White10,
    minHeight: screen.height * 0.0775,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

export const QuestionsItem = memo(_QuestionsItem);
