import React from 'react';
import InfoPokemon from '../../components/InfoPokemon';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Pokemon: {id: number};
  Profile: undefined;
};

type PokemonPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Pokemon'>;
  route: RouteProp<RootStackParamList, 'Pokemon'>;
};

export default function Pokemon({navigation, route}: PokemonPageProps) {
  const {id} = route.params;

  function handleClickBack() {
    navigation.navigate('Profile');
  }

  return <InfoPokemon onBack={handleClickBack} idPokemon={id} />;
}
