import React from 'react';
import {useState} from 'react';
import FormPadrao from '../FormPadrao';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

type CadastroProps = {
  onPress: () => void;
  onBack: () => void;
};

export default function CadastroForm({onPress, onBack}: CadastroProps) {
  const [valuesList, setValuesList] = useState<{
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  }>({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  });

  function handleChange(name: string, value: string) {
    setValuesList({...valuesList, [name]: value});
  }

  async function handlleClickCadastro() {
    try {
      const cadastro = auth().createUserWithEmailAndPassword(
        valuesList.email,
        valuesList.password,
      );
      if (await cadastro) {
        onPress();
      }
    } catch (err) {
      Alert.alert('Erro');
    }
  }

  return (
    <FormPadrao
      valuesText={{
        email: 'Digite um email',
        password: 'Digite uma senha',
        username: 'Digite um username',
        confirmPassword: 'Confirme sua senha',
      }}
      onBack={onBack}
      onPress={handlleClickCadastro}
      onChange={handleChange}
      values={valuesList}
      inputExist={true}
      title={'Cadastrar'}
      text={'Já possui uma conta?'}
    />
  );
}
