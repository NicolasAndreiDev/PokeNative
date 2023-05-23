import React, {useEffect, useState} from 'react';
import User from '../../components/User';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Profile: undefined;
  Home: undefined;
  Pokemon: {id: number};
};

type ProfileProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Profile'>;
};

export default function Profile({navigation}: ProfileProps) {
  const [id, setId] = useState<number | undefined>();

  useEffect(() => {
    if (id !== undefined) {
      navigation.navigate('Pokemon', {id});
    }
  }, [id, navigation]);

  function handleClickBack() {
    navigation.navigate('Home');
  }

  function handleClickPokemon(value: number) {
    setId(value);
  }

  return <User onBack={handleClickBack} onTouch={handleClickPokemon} />;
}
