import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import API from '../../utils/Api';

export default function PokemonCard({onTouch}: {onTouch: () => void}) {
  const [pokemon, setPokemon] = useState<{name: string}>({name: ''});

  useEffect(() => {
    const res = async () => {
      setPokemon(await API({id: 500}));
    };
    res();
  }, []);

  return (
    <View style={styles.card} onTouchEnd={onTouch}>
      {/* @ts-ignore */}
      {pokemon.sprites?.other?.home?.front_default ? (
        <Image
          //@ts-ignore
          source={{uri: `${pokemon.sprites.other.home.front_default}`}}
          style={styles.pokemonImage}
        />
      ) : (
        ''
      )}
      <Text>{pokemon.name}</Text>
    </View>
  );
}
