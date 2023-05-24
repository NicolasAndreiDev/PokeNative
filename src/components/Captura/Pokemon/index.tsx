import React, {useEffect, useState} from 'react';
import {Image, Dimensions, View} from 'react-native';
import styles from './styles';
import API from '../../../utils/Api';

const height = Dimensions.get('window').height;

export default function Pokemon({
  refreshPoke,
  setIdPokemon,
}: {
  refreshPoke: boolean;
  setIdPokemon: (value: number) => void;
}) {
  const [pokemon, setPokemon] = useState<{
    height: number;
    sprites?: {
      other?: {
        home?: {
          front_default?: string;
        };
      };
    };
  }>({
    height: 0,
  });

  useEffect(() => {
    const res = async () => {
      const randomValue = Math.floor(Math.random() * 700);
      setPokemon(await API({id: randomValue}));
      setIdPokemon(randomValue);
    };
    res();
  }, [refreshPoke, setIdPokemon]);

  const pokemonHeight = pokemon.height < 8 ? 8 : pokemon.height;

  return (
    <View style={styles.infoUser}>
      {pokemon.sprites?.other?.home?.front_default ? (
        <Image
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
        ''
      )}
    </View>
  );
}
