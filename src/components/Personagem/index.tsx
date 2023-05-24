import React, {useState, useContext} from 'react';
import {
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TrainerM from '../../../assets/Trainer_M.png';
import TrainerF from '../../../assets/Trainer_F.png';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {userContext} from '../../providers/userProvider';

export default function Personagens({onPress}: {onPress: () => void}) {
  const {updatePokemon} = useContext(userContext);
  const [personagem, setPersonagem] = useState(false);
  const [username, setUsername] = useState('');

  let personagemType = 'M';
  if (personagem === true) {
    personagemType = 'F';
  }

  function handleClick() {
    setPersonagem(prev => !prev);
  }

  function handleChange(text: string) {
    setUsername(text);
  }

  async function handleSubmit() {
    try {
      const email = auth().currentUser?.email;
      await firestore()
        .collection('users')
        .doc(`${email}`)
        .update({username, personagemImage: personagemType})
        .then(() => updatePokemon());
      onPress();
    } catch (err) {
      console.log(err);
      Alert.alert('Erro');
    }
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
          value={username}
          onChangeText={handleChange}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={handleSubmit}>
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
