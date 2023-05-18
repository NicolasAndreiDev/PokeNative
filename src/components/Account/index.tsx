import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Poke from '../../../assets/Poke.png';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Fundo from '../../../assets/fundo.png';

export default function Account({
  onPressLogin,
  onPressCadastro,
}: {
  onPressLogin: () => void;
  onPressCadastro: () => void;
}) {
  return (
    <ImageBackground source={Fundo} blurRadius={4} style={styles.fundo}>
      <View style={styles.effect}>
        <View style={styles.containerImage}>
          <Image source={Poke} style={styles.image} />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onPressLogin} activeOpacity={0.9}>
            <LinearGradient
              colors={['rgb(119, 252, 104)', '#6afdc2']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.button}>
              <Text style={styles.text}>Returning Player</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={onPressCadastro}
            activeOpacity={0.9}>
            <Text style={[styles.text, styles.text2]}>New Player</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
