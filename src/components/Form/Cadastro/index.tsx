import React from 'react';
import {useState, useContext} from 'react';
import FormPadrao from '../FormPadrao';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {userContext} from '../../../providers/userProvider';

type CadastroProps = {
  onPress: () => void;
  onBack: () => void;
};

export default function CadastroForm({onPress, onBack}: CadastroProps) {
  const {updatePokemon} = useContext(userContext);
  const [valuesList, setValuesList] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(name: string, value: string) {
    setValuesList({...valuesList, [name]: value});
  }

  async function handleClickCadastro() {
    try {
      if (
        valuesList.email === '' ||
        valuesList.password === '' ||
        valuesList.confirmPassword === ''
      ) {
        return Alert.alert('Preencha todos os campos!');
      }

      const userDoc = await firestore()
        .collection('users')
        .doc(valuesList.email)
        .get();
      if (userDoc.exists) {
        return Alert.alert('Usuário já existe!');
      }

      const cadastro = await auth().createUserWithEmailAndPassword(
        valuesList.email,
        valuesList.password,
      );

      if (cadastro) {
        await firestore()
          .collection('users')
          .doc(valuesList.email)
          .set({
            email: valuesList.email,
          })
          .then(() => updatePokemon());
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
        confirmPassword: 'Confirme sua senha',
      }}
      onBack={onBack}
      onPress={handleClickCadastro}
      onChange={handleChange}
      values={valuesList}
      inputExist={true}
      title={'Cadastrar'}
      text={'Já possui uma conta?'}
    />
  );
}
