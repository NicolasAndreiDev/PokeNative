import React from 'react';
import {Keyboard, TouchableNativeFeedback, View} from 'react-native';
import Personagens from '../../components/Personagem';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  SelectCharacter: undefined;
  Home: undefined;
};

type SelectCharacterProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SelectCharacter'>;
};

export default function SelectCharacter({navigation}: SelectCharacterProps) {
  function handleClick() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View>
        <Personagens onPress={handleClick} />
      </View>
    </TouchableNativeFeedback>
  );
}
