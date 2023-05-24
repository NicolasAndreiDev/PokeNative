import React from 'react';
import InfoPokemon from '../../components/InfoPokemon';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, RouteProp} from '@react-navigation/native';

type PokemonPageProps = {
  navigation: StackNavigationProp<ParamListBase, 'Pokemon'>;
  route: RouteProp<ParamListBase, 'Pokemon'>;
};

export default function Pokemon({navigation, route}: PokemonPageProps) {
  const {id} = route.params as {id: number};

  function handleClickBack() {
    navigation.navigate('Profile');
  }

  return <InfoPokemon onBack={handleClickBack} idPokemon={id} />;
}
