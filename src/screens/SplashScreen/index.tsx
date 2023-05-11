import React from 'react';
import {
  StatusBar,
  Animated,
  ImageBackground,
  View,
  Text,
  Easing,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import Splash from '../../../assets/splash.png';

type RootStackParamList = {
  SplashScren: undefined;
  UserType: undefined;
  Login: undefined;
  Main: undefined;
};

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SplashScren'>;
};

export default function SplashScreen({navigation}: SplashScreenProps) {
  const width = Dimensions.get('screen').width;
  const loading = useRef(new Animated.Value(-(width * 0.8))).current;

  useEffect(() => {
    Animated.timing(loading, {
      toValue: 0,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'UserType'}],
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageBackground source={Splash} style={styles.container}>
      <Text style={styles.text}>
        Prepare-se para uma jornada incrível pelo mundo dos Pokémon! Estamos
        carregando os dados para que você possa explorar todas as regiões,
        capturar novos Pokémon e batalhar com outros treinadores. Aguarde um
        pouco mais para começar a sua aventura!
      </Text>
      <View style={styles.load}>
        <Animated.View
          style={[styles.loader, {transform: [{translateX: loading}]}]}
        />
      </View>
      <StatusBar hidden />
    </ImageBackground>
  );
}
