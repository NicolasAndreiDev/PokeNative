import React from 'react';
import CadastroForm from '../../components/Form/Cadastro';
import {StackNavigationProp} from '@react-navigation/stack';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';

type RootStackParamList = {
  Cadastro: undefined;
  UserType: undefined;
  Home: undefined;
};

type CadastroProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Cadastro'>;
};

export default function Cadastro({navigation}: CadastroProps) {
  function handleClick() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  function handleClickBack() {
    navigation.navigate('UserType');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <CadastroForm onBack={handleClickBack} onPress={handleClick} />
      </View>
    </TouchableWithoutFeedback>
  );
}
