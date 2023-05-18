import React, {useEffect, useState} from 'react';
import {Image, Dimensions, View, Text} from 'react-native';
import styles from './styles';
import API from '../../utils/Api';

const height = Dimensions.get('window').height;

export default function InfoUser() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const res = async () => {
      setPokemon(await API());
    };
    res();
  }, []);

  // @ts-ignore
  const pokemonHeight = pokemon?.height || 0;

  return (
    <View style={styles.infoUser}>
      {/* @ts-ignore */}
      {pokemon.sprites?.other?.home?.front_default ? (
        <Image
          // @ts-ignore
          source={{uri: `${pokemon.sprites.other.home.front_default}`}}
          style={[
            styles.pokemon,
            {
              height: (height * pokemonHeight) / 54,
              width: (height * pokemonHeight) / 52,
            },
          ]}
        />
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}
