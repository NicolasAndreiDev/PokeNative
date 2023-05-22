import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Fundo from '../../../../assets/fundo.png';
import Poke from '../../../../assets/Poke.png';
import ButtonBack from '../../ButtonBack';

type FormProps = {
  values: {
    email: string;
    password: string;
    confirmPassword?: string;
  };
  valuesText: {
    email: string;
    password: string;
    confirmPassword?: string;
  };
  onPress: () => void;
  onChange: (name: string, value: string) => void;
  onBack: () => void;
  inputExist?: boolean;
  title: string;
  text: string;
};

export default function FormPadrao({
  onPress,
  inputExist = false,
  title,
  valuesText,
  values,
  onChange,
  onBack,
}: FormProps) {
  return (
    <ImageBackground source={Fundo} blurRadius={4} style={styles.container}>
      <View style={styles.effect}>
        <View style={styles.containerImage}>
          <Image source={Poke} style={styles.poke} />
        </View>
        <Text style={styles.trainer}>Trainer Club</Text>
        <View style={styles.infos}>
          <View style={styles.inputs}>
            <TextInput
              autoComplete="off"
              placeholder={valuesText.email}
              value={values.email}
              placeholderTextColor={'white'}
              onChangeText={value => onChange('email', value)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputs}>
            <TextInput
              placeholder={valuesText.password}
              value={values.password}
              placeholderTextColor={'white'}
              onChangeText={value => onChange('password', value)}
              style={styles.input}
              secureTextEntry
            />
          </View>
          {inputExist && (
            <View style={styles.inputs}>
              <TextInput
                placeholder={valuesText.confirmPassword}
                value={values.confirmPassword}
                placeholderTextColor={'white'}
                onChangeText={value => onChange('confirmPassword', value)}
                style={styles.input}
                secureTextEntry
              />
            </View>
          )}
        </View>
        <View style={styles.request}>
          <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
            <LinearGradient
              colors={['rgb(119, 252, 104)', '#6afdc2']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.button}>
              <Text style={styles.requestText}>{title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <ButtonBack onBack={onBack} />
      </View>
    </ImageBackground>
  );
}
