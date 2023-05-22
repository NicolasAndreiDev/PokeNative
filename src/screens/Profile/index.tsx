import React from 'react';
import User from '../../components/User';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Profile: undefined;
  Home: undefined;
  Pokemon: undefined;
};

type ProfileProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

export default function Profile({navigation}: ProfileProps) {
  function handleClickBack() {
    navigation.navigate('Home');
  }

  function handleClickPokemon() {
    navigation.navigate('Pokemon');
  }

  return <User onBack={handleClickBack} onTouch={handleClickPokemon} />;
}
