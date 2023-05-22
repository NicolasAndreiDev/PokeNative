import React from 'react';
import InfoPokemon from '../../components/InfoPokemon';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Pokemon: undefined;
  Profile: undefined;
};

type PokemonPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Pokemon'>;
};

export default function PokemonPage({navigation}: PokemonPageProps) {
  function handleClickBack() {
    navigation.navigate('Profile');
  }

  return <InfoPokemon onBack={handleClickBack} />;
}
