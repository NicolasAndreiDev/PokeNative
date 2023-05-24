import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Captura from '../../components/Captura';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Pokemon: {id: number};
  Profile: undefined;
  Home: undefined;
};

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function Home({navigation}: HomeProps) {
  const [id, setId] = useState<number | undefined>();

  useEffect(() => {
    if (id !== undefined) {
      navigation.navigate('Pokemon', {id});
    }
  }, [id, navigation]);

  function handleClick() {
    navigation.navigate('Profile');
  }

  async function handlePokemon(value: number) {
    setId(value);
  }

  return (
    <SafeAreaView>
      <Captura onPress={handleClick} mostrarPokemon={handlePokemon} />
    </SafeAreaView>
  );
}
