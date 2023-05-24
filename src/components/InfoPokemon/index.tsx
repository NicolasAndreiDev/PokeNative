import React, {useEffect, useState, useContext} from 'react';
import {View, Image, Text} from 'react-native';
import ButtonBack from '../ButtonBack';
import styles from './styles';
import API from '../../utils/Api';
import colors from '../../utils/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import {userContext} from '../../providers/userProvider';

export default function InfoPokemon({
  onBack,
  idPokemon,
}: {
  onBack: () => void;
  idPokemon: number;
}) {
  const {user, updatePokemon} = useContext(userContext);
  const [pokemon, setPokemon] = useState<{
    name: string;
    types?: {type: {name: string}}[];
    height: number;
    weight: number;
  }>({name: '', height: 0, weight: 0});

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await API({id: idPokemon});
      setPokemon(response);
    };
    fetchPokemon();
  }, [idPokemon]);

  let pokeColor = 'white';
  let pokeColorType2 = 'white';
  let pokeTypes = [''];
  if (pokemon.types) {
    const typePokemon = pokemon.types.map(type => type.type.name);
    pokeTypes = typePokemon;
    const color = colors.find(
      (colorType: {name: string; color: string}) =>
        colorType.name === typePokemon[0],
    );
    const color2 = colors.find(
      (colorType: {name: string; color: string}) =>
        colorType.name === typePokemon[1],
    );
    pokeColor = color ? color.color : '';
    pokeColorType2 = color2 ? color2.color : '';
  }

  const pokemonWeight = `${pokemon.weight / 10}`.replace('.', ',');

  let pokemonHeight = '';
  if (pokemon.height > 9 && pokemon.height < 100) {
    pokemonHeight = `${pokemon.height / 10}`.replace('.', ',');
  } else {
    pokemonHeight = `0,${pokemon.height}`;
  }

  async function handleClickPokemonFav() {
    try {
      firestore()
        .collection('users')
        .doc(user?.email)
        .update({pokemonFav: idPokemon});
      updatePokemon();
      updatePokemon();
    } catch {
      console.log('Erro');
    }
  }

  return (
    <>
      {pokemon ? (
        <View style={[styles.container, {backgroundColor: pokeColor}]}>
          <View style={styles.infoPoke}>
            <View style={styles.pokemonImage}>
              {/* @ts-ignore */}
              {pokemon.sprites?.other?.home?.front_default && (
                <Image
                  //@ts-ignore
                  source={{uri: pokemon.sprites.other.home.front_default}}
                  style={styles.pokemon}
                />
              )}
            </View>
            <View>
              <Text style={styles.pokeName}>{pokemon.name}</Text>
            </View>
            <View style={styles.pokeInfos}>
              <View style={styles.info}>
                <Text>{pokemonWeight}kg</Text>
                <Text>Weight</Text>
              </View>
              <View style={styles.linhaVertical} />
              <View style={styles.info}>
                <View style={styles.types}>
                  <Text style={[styles.type, {backgroundColor: pokeColor}]}>
                    {pokeTypes[0]}
                  </Text>
                  {pokeTypes[1] ? (
                    <Text
                      style={[styles.type, {backgroundColor: pokeColorType2}]}>
                      {pokeTypes[1]}
                    </Text>
                  ) : (
                    ''
                  )}
                </View>
                <Text>{pokeTypes[1] ? 'Types' : 'Type'}</Text>
              </View>
              <View style={styles.linhaVertical} />
              <View style={styles.info}>
                <Text>{pokemonHeight}m</Text>
                <Text>Height</Text>
              </View>
            </View>
            <View style={styles.linha} />
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={handleClickPokemonFav}>
              <LinearGradient
                colors={['rgb(119, 252, 104)', '#6afdc2']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.button}>
                <Text style={styles.textButton}>
                  Selecionar como Companheiro
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <ButtonBack onBack={onBack} />
        </View>
      ) : (
        ''
      )}
    </>
  );
}
