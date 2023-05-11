import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Fundo from '../../../../assets/fundo.png';
import LinearGradient from 'react-native-linear-gradient';

type FormProps = {
  values: {
    email: string;
    password: string;
    confirmPassword?: string;
    username?: string;
  };
  onPress: () => void;
  onChange: (name: string, value: string) => void;
  inputExist?: boolean;
  title: string;
  text: string;
};

export default function FormPadrao({
  onPress,
  inputExist = false,
  title,
  values,
  onChange,
}: FormProps) {
  return (
    <ImageBackground source={Fundo} blurRadius={4} style={styles.container}>
      <View style={styles.infos}>
        <View style={styles.inputs}>
          <Text>Email</Text>
          <TextInput
            placeholder="insira seu email"
            value={values.email}
            onChangeText={value => onChange('email', value)}
            style={styles.input}
          />
        </View>
        {inputExist && (
          <View style={styles.inputs}>
            <Text>Username</Text>
            <TextInput
              placeholder="insira um username"
              value={values.username}
              onChangeText={value => onChange('username', value)}
              style={styles.input}
            />
          </View>
        )}
        <View style={styles.inputs}>
          <Text>Password</Text>
          <TextInput
            placeholder="insira sua senha"
            value={values.password}
            onChangeText={value => onChange('password', value)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        {inputExist && (
          <View style={styles.inputs}>
            <Text>Confirm Password</Text>
            <TextInput
              placeholder="confirme sua senha"
              value={values.confirmPassword}
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
    </ImageBackground>
  );
}
