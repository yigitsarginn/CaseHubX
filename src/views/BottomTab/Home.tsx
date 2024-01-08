/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PremiumBadge from '@/components/PremiumBadge';
import { Text } from '@/components/Text';
import { rh, rs, screen } from '@/styles/helpers';
import { t } from '@/lang';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '@/styles/colors';
import { Icon } from '@/components/Icon';
import { ScrollView } from 'react-native-virtualized-view';
import { Category, Question } from '@/types';
import { DATA_CATEGORIES, DATA_QUESTIONS } from '@/utils/constants';
import { CategoriesItem } from '@/components/CategoriesItem';
import { QuestionsItem } from '@/components/QuestionsItem';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  const { top } = useSafeAreaInsets();
  const [searchText, setSearchText] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);
  const [isFirstOpen, setIsFirstOpen] = React.useState(true);
  const [isLoading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [questionsData, setQuestionsData] = useState<Question[]>([]);

  const getCurrentTimeOfDay = useMemo(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return t('Onboarding.Home.good_morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      return t('Onboarding.Home.good_afternoon');
    } else {
      return t('Onboarding.Home.good_evening');
    }
  }, []);

  const getCategories = async () => {
    try {
      const response = await fetch(DATA_CATEGORIES);
      const json = await response.json();
      setCategoryData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getQuestions = async () => {
    try {
      const response = await fetch(DATA_QUESTIONS);
      const json = await response.json();
      setQuestionsData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
    getQuestions();
  }, []);

  const renderQuestionItem: ListRenderItem<Question> = useCallback(
    ({ item }) => {
      return <QuestionsItem item={item} onPress={() => {}} />;
    },
    [],
  );

  const renderCategoriesItem: ListRenderItem<any> = useCallback(({ item }) => {
    return <CategoriesItem item={item} onPress={() => {}} />;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View
        style={[
          styles.header,
          {
            marginTop: top + rh(3),
          },
        ]}>
        <Text
          numberOfLines={1}
          color="MainText"
          letterSpacing={0.07}
          lineHeight={rs(18.96)}
          fontFamily="Rubik_400Regular"
          variant="mediumPlus">
          {t('Onboarding.Home.hi_plant_lover')}
        </Text>
        <Text
          style={{
            marginTop: rh(6),
          }}
          numberOfLines={1}
          color="MainText"
          letterSpacing={0.35}
          fontFamily="Rubik_500Medium"
          variant="h3">
          {getCurrentTimeOfDay}
        </Text>
      </View>
      <View>
        <Image
          style={styles.leftObject}
          source={require('@/../assets/images/Home/LeftPlant.png')}
        />
        <Image
          style={styles.rightObject}
          source={require('@/../assets/images/Home/RightPlant.png')}
        />
        <View style={styles.input}>
          <Icon icon="search" color={colors.ThirdGray} size={rs(20)} />
          <TextInput
            style={{
              marginHorizontal: rs(12),
            }}
            blurOnSubmit
            ref={inputRef}
            onChangeText={setSearchText}
            value={searchText}
            placeholder={t('Onboarding.Home.search_for_plants')}
            placeholderTextColor={'#AFAFAF'}
            onSubmitEditing={() => setIsFirstOpen(false)}
            onKeyPress={() => {
              // Ilk acildiginda, ve sonrasinda search keyword olmadiginda empty state gostermek istiyoruz
              // Bu yuzden ilk acildiginda ve keyPress atildiginda arama moduna geciriyoruz empty state'ten.
              // Tekrardan keyword sifirlaninca emptyState'e geciriyoruz.
              if (isFirstOpen) {
                setIsFirstOpen(false);
              }
            }}
          />
        </View>
        <View style={styles.divider} />
      </View>
      <View style={styles.premiumFooter}>
        <PremiumBadge onPress={() => {}} />
        <ScrollView style={styles.scrollContainer}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View>
              <Text
                style={{ paddingHorizontal: rs(24), marginBottom: rh(10) }}
                numberOfLines={1}
                letterSpacing={-0.24}
                color="MainText"
                fontFamily="Rubik_500Medium"
                lineHeight={rs(20)}
                variant="normal">
                {t('Onboarding.Home.get_started')}
              </Text>
              <FlatList
                style={{
                  marginTop: 5,
                }}
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: rs(24),
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={({ id }) => id.toString()}
                data={questionsData}
                renderItem={renderQuestionItem}
              />
              <FlatList
                style={styles.categoriesList}
                contentContainerStyle={{}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={categoryData}
                renderItem={renderCategoriesItem}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    paddingHorizontal: rs(24),
  },
  input: {
    backgroundColor: colors.White88,
    height: rh(44),
    borderColor: '#3C3C43',
    borderWidth: 0.2,
    color: colors.MainText,
    paddingHorizontal: rs(12),
    marginTop: rh(24),
    borderRadius: rs(12),
    marginHorizontal: rs(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoriesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: rs(24),
    justifyContent: 'space-between',
    marginTop: rh(24),
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FBFAFA',
    marginTop: rh(24),
  },
  leftObject: {
    position: 'absolute',
    marginTop: rh(14),
    width: rh(100),
    height: rh(70),
  },
  rightObject: {
    position: 'absolute',
    marginTop: rh(14),
    right: 0,
    width: rh(100),
    height: rh(65),
  },
  divider: {
    width: screen.width,
    height: 0.2,
    backgroundColor: colors.DividerDark10,
    marginTop: rh(14),
  },
  premiumFooter: {
    flex: 1,
    backgroundColor: '#FBFAFA',
  },
});
