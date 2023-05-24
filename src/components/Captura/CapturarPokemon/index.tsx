import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, Alert} from 'react-native';
import Pokebola from '../../../../assets/pokebola.png';
import styles from './styles';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import firestore from '@react-native-firebase/firestore';
import {userContext} from '../../../providers/userProvider';
import {useContext} from 'react';

export default function CapturarPokemon({
  idPokemon,
  pokemonFugiu,
  mostrarPokemon,
}: {
  idPokemon: number;
  pokemonFugiu: () => void;
  mostrarPokemon: (value: number) => Promise<void>;
}) {
  const {user, updatePokemon} = useContext(userContext);
  const [tentativas, setTentativas] = useState(3);

  useEffect(() => {
    setTentativas(3);
  }, [idPokemon]);

  async function handleClickCaptura() {
    const userDocRef = firestore().collection('users').doc(user?.email);
    const userDoc = await userDocRef.get();
    const userData = userDoc.data();
    const randoNumber = Math.floor(Math.random() * 100);

    if (randoNumber > 65) {
      if (userData && userData.pokemons) {
        const updatedPokemons = [...userData.pokemons, idPokemon];
        userDocRef.update({pokemons: updatedPokemons});
      } else {
        userDocRef.update({pokemons: [idPokemon]});
      }
      Alert.alert('Pokemon capturado com sucesso!');
      mostrarPokemon(idPokemon).then(() => {
        pokemonFugiu();
        updatePokemon();
      });
    } else {
      if (tentativas > 1) {
        setTentativas(value => value - 1);
        Alert.alert('Você não conseguiu capturar o pokemon, tente novamente!');
      } else {
        Alert.alert('O pokemon fugiu!');
        pokemonFugiu();
      }
    }
  }

  return (
    <>
      <View style={styles.containerChance}>
        <View style={styles.chance}>
          {tentativas === 0 ? (
            <Grayscale>
              <Image source={Pokebola} style={styles.pokeChance} />
            </Grayscale>
          ) : (
            <Image source={Pokebola} style={styles.pokeChance} />
          )}
          {tentativas > 1 ? (
            <Image source={Pokebola} style={styles.pokeChance} />
          ) : (
            <Grayscale>
              <Image source={Pokebola} style={styles.pokeChance} />
            </Grayscale>
          )}
          {tentativas > 2 ? (
            <Image source={Pokebola} style={styles.pokeChance} />
          ) : (
            <Grayscale>
              <Image source={Pokebola} style={styles.pokeChance} />
            </Grayscale>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={styles.poke}
        activeOpacity={0.9}
        onPress={handleClickCaptura}>
        <Image source={Pokebola} style={styles.pokebola} />
      </TouchableOpacity>
    </>
  );
}
