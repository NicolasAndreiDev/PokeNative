import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import TelaCaptura from '../../../assets/trueFundo.jpg';
import styles from './styles';
import Pokemon from '../Pokemon';
import RefreshPokemon from './RefreshPokemon';
import ProfileButton from './ProfileButton';
import CapturarPokemon from './CapturarPokemon';

export default function Captura({onPress}: {onPress: () => void}) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(prev => !prev);
  }

  return (
    <ImageBackground source={TelaCaptura} style={styles.container}>
      <Pokemon refreshPoke={click} />
      <CapturarPokemon />
      <ProfileButton onPress={onPress} />
      <RefreshPokemon refreshPoke={handleClick} />
    </ImageBackground>
  );
}
