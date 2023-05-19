import React, {useEffect, useState} from 'react';
import {Image, Dimensions, View, Text} from 'react-native';
import styles from './styles';
import API from '../../utils/Api';

const height = Dimensions.get('window').height;

export default function Pokemon({refreshPoke}: {refreshPoke: boolean}) {
  const [pokemon, setPokemon] = useState<{height: number}>({
    height: 0,
  });

  useEffect(() => {
    const res = async () => {
      const randomValue = Math.floor(Math.random() * 700);
      setPokemon(await API({id: randomValue}));
    };
    res();
  }, [refreshPoke]);

  const pokemonHeight = pokemon.height;

  return (
    <View style={styles.infoUser}>
      {/* @ts-ignore */}
      {pokemon.sprites?.other?.home?.front_default ? (
        <Image
          // @ts-ignore
          source={{uri: `${pokemon.sprites.other.home.front_default}`}}
          style={[
            {
              height:
                (pokemonHeight < 20 ? height * pokemonHeight : height * 16) /
                40,
              width:
                (pokemonHeight < 20 ? height * pokemonHeight : height * 16) /
                40,
            },
          ]}
        />
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}
