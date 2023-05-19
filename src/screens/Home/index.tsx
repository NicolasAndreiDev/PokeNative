import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Captura from '../../components/Captura';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Profile: undefined;
  Home: undefined;
};

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function Home({navigation}: HomeProps) {
  function handleClick() {
    navigation.navigate('Profile');
  }

  return (
    <SafeAreaView>
      <Captura onPress={handleClick} />
    </SafeAreaView>
  );
}
