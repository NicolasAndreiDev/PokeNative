import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import TelaCaptura from '../../../assets/trueFundo.jpg';
import styles from './styles';
import Pokemon from './Pokemon';
import RefreshPokemon from './RefreshPokemon';
import ProfileButton from './ProfileButton';
import CapturarPokemon from './CapturarPokemon';

export default function Captura({
  onPress,
  mostrarPokemon,
}: {
  onPress: () => void;
  mostrarPokemon: (value: number) => Promise<void>;
}) {
  const [click, setClick] = useState(false);
  const [id, setId] = useState<number>();

  function handleClick() {
    setClick(prev => !prev);
  }

  return (
    <ImageBackground source={TelaCaptura} style={styles.container}>
      <Pokemon refreshPoke={click} setIdPokemon={setId} />
      <CapturarPokemon
        idPokemon={id!}
        pokemonFugiu={handleClick}
        mostrarPokemon={mostrarPokemon}
      />
      <ProfileButton onPress={onPress} />
      <RefreshPokemon refreshPoke={handleClick} />
    </ImageBackground>
  );
}
