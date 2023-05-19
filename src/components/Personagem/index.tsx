import React, {useState} from 'react';
import {Image, View, TextInput, Text, TouchableOpacity} from 'react-native';
import TrainerM from '../../../assets/Trainer_M.png';
import TrainerF from '../../../assets/Trainer_F.png';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Grayscale} from 'react-native-color-matrix-image-filters';

export default function Personagens({onPress}: {onPress: () => void}) {
  const [personagem, setPersonagem] = useState(false);

  function handleClick() {
    setPersonagem(prev => !prev);
  }

  return (
    <LinearGradient
      colors={['#4AB583', '#286979']}
      start={{x: 0, y: 0}}
      end={{x: 1.2, y: 0.64}}
      style={styles.container}>
      <Text style={styles.title}>Select your character</Text>
      <View style={styles.containerPersonagem}>
        {personagem ? (
          <>
            <Grayscale onTouchEnd={handleClick}>
              <Image source={TrainerM} style={styles.personagem} />
            </Grayscale>
            <Image source={TrainerF} style={styles.personagem} />
          </>
        ) : (
          <>
            <Image source={TrainerM} style={styles.personagem} />
            <Grayscale onTouchEnd={handleClick}>
              <Image source={TrainerF} style={styles.personagem} />
            </Grayscale>
          </>
        )}
      </View>
      <View style={styles.request}>
        <TextInput
          placeholder="Digite um username"
          style={styles.input}
          placeholderTextColor={'white'}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={onPress}>
          <LinearGradient
            colors={['rgb(119, 252, 104)', '#6afdc2']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button}>
            <Text style={styles.text}>Confirmar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
