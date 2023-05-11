import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from './styles';
import LoginForm from '../../components/Form/Login';

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

export default function Login({navigation}: LoginProps) {
  function handleClick() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LoginForm onPress={handleClick} />
      </View>
    </TouchableWithoutFeedback>
  );
}
