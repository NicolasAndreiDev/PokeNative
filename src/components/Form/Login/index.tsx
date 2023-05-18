import React from 'react';
import {useState} from 'react';
import FormPadrao from '../FormPadrao';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

type LoginProps = {
  onPress: () => void;
  onBack: () => void;
};

export default function LoginForm({onPress, onBack}: LoginProps) {
  const [valuesList, setValuesList] = useState<{
    email: string;
    password: string;
    username: undefined;
    confirmPassword: undefined;
  }>({
    email: '',
    password: '',
    confirmPassword: undefined,
    username: undefined,
  });

  function handleChange(name: string, value: string) {
    setValuesList({...valuesList, [name]: value});
  }

  async function handleClickLogin() {
    try {
      if (valuesList.email === '' || valuesList.password === '') {
        return Alert.alert('Preencha todos os campos');
      }

      await auth().signInWithEmailAndPassword(
        valuesList.email,
        valuesList.password,
      );
      onPress();
    } catch (err) {
      Alert.alert('Erro');
    }
  }

  return (
    <FormPadrao
      valuesText={{email: 'Digite seu email', password: 'Digite sua senha'}}
      onBack={onBack}
      onPress={handleClickLogin}
      onChange={handleChange}
      values={valuesList}
      title={'Logar'}
      text={'Não possui uma conta?'}
    />
  );
}
