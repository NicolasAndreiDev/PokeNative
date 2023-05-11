import React from 'react';
import Account from '../../components/Account';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  UserType: undefined;
  Login: undefined;
  Cadastro: undefined;
};

type UserTypeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'UserType'>;
};

export default function UserType({navigation}: UserTypeProps) {
  function handleClickLogin() {
    navigation.navigate('Login');
  }

  function handleClickCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <Account
      onPressLogin={handleClickLogin}
      onPressCadastro={handleClickCadastro}
    />
  );
}
