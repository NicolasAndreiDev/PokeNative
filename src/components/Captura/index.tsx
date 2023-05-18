import React from 'react';
import {ImageBackground} from 'react-native';
import TelaCaptura from '../../../assets/trueFundo.jpg';
import styles from './styles';
import InfoUser from '../InfoUser';

export default function Captura() {
  return (
    <ImageBackground source={TelaCaptura} style={styles.container}>
      <InfoUser />
    </ImageBackground>
  );
}
