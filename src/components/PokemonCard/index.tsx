import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import API from '../../utils/Api';

export default function PokemonCard({
  onTouch,
  idPokemon,
}: {
  onTouch: (value: number) => void;
  idPokemon: number;
}) {
  const [pokemon, setPokemon] = useState<{
    name: string;
    sprites?: {
      other?: {
        home?: {
          front_default?: string;
        };
      };
    };
  }>({name: ''});

  useEffect(() => {
    const res = async () => {
      setPokemon(await API({id: idPokemon}));
    };
    res();
  }, [idPokemon]);

  return (
    <View
      style={styles.card}
      onTouchEnd={() => {
        onTouch(idPokemon);
      }}>
      {pokemon.sprites?.other?.home?.front_default ? (
        <Image
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
