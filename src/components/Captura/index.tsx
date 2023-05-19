import React, {useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import TelaCaptura from '../../../assets/trueFundo.jpg';
import styles from './styles';
import Pokemon from '../Pokemon';
import Pokebola from '../../../assets/pokebola.png';
import RefreshPokemon from './RefreshPokemon';
import ProfileButton from './ProfileButton';

export default function Captura({onPress}: {onPress: () => void}) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(prev => !prev);
  }

  return (
    <ImageBackground source={TelaCaptura} style={styles.container}>
      <Pokemon refreshPoke={click} />
      <Image source={Pokebola} style={styles.pokebola} />
      <ProfileButton onPress={onPress} />
      <RefreshPokemon refreshPoke={handleClick} />
    </ImageBackground>
  );
}
