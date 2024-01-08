import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '@/components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={async () => {
          AsyncStorage.clear();
        }}>
        <Text>Reset Local Stroge</Text>
      </Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
