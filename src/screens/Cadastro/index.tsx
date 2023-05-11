import React from 'react';
import CadastroForm from '../../components/Form/Cadastro';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Cadastro: undefined;
  Main: undefined;
};

type CadastroProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Cadastro'>;
};

export default function Cadastro({navigation}: CadastroProps) {
  function handleClick() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
  }

  return <CadastroForm onPress={handleClick} />;
}
