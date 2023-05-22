import React, {useEffect, useState} from 'react';
import {Image, View, ScrollView, Dimensions, Text} from 'react-native';
import TrainerM from '../../../assets/Trainer_M.png';
import styles from './styles';
import PokemonCard from '../PokemonCard';
import ButtonBack from '../ButtonBack';
import API from '../../utils/Api';

const height = Dimensions.get('window').height;

export default function User({
  onBack,
  onTouch,
}: {
  onBack: () => void;
  onTouch: () => void;
}) {
  const [pokemon, setPokemon] = useState<{height: number}>({height: 0});

  useEffect(() => {
    const res = async () => {
      setPokemon(await API({id: 500}));
    };
    res();
  }, []);

  //@ts-ignore
  const pokemonHeigth = pokemon?.height < 8 ? 8 : pokemon.height;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerInfo}>
            <View style={styles.userInfo}>
              <View style={styles.names}>
                <Text style={styles.username}>Nicolas</Text>
                <Text style={styles.pokemonFav}>& Emboar</Text>
              </View>
              {/* @ts-ignore */}
              {pokemon.sprites?.other?.home?.front_default ? (
                <Image
                  // @ts-ignore
                  source={{uri: `${pokemon.sprites.other.home.front_default}`}}
                  style={[
                    styles.pokemonImage,
                    {
                      height:
                        (pokemonHeigth < 20
                          ? height * pokemonHeigth
                          : height * 16) / 40,
                      width:
                        (pokemonHeigth < 20
                          ? height * pokemonHeigth
                          : height * 16) / 40,
                    },
                  ]}
                />
              ) : (
                ''
              )}
              <Image source={TrainerM} style={styles.ImagePersonagem} />
            </View>
            <View style={styles.linhaPoke}>
              <View style={styles.linha} />
              <Text>Pokemons</Text>
              <View style={styles.linha} />
            </View>
            <View style={styles.pokeInfo}>
              <PokemonCard onTouch={onTouch} />
              <PokemonCard onTouch={onTouch} />
              <PokemonCard onTouch={onTouch} />
            </View>
          </View>
        </ScrollView>
      </View>
      <ButtonBack onBack={onBack} />
    </View>
  );
}
