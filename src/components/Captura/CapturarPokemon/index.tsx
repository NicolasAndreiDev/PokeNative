import React from 'react';
import {Image} from 'react-native';
import Pokebola from '../../../../assets/pokebola.png';
import styles from './styles';

export default function CapturarPokemon() {
  return <Image source={Pokebola} style={styles.pokebola} />;
}
