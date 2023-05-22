import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {StatusBar} from 'react-native';
import Profile from './src/screens/Profile';
import SplashScreen from './src/screens/SplashScreen';
import React from 'react';
import UserType from './src/screens/UserType';
import Cadastro from './src/screens/Cadastro';
import SelectCharacter from './src/screens/SelectCharacter';
import PokemonPage from './src/screens/Pokemon';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'UserType'} component={UserType} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Cadastro'} component={Cadastro} />
        <Stack.Screen name={'SelectCharacter'} component={SelectCharacter} />
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Profile'} component={Profile} />
        <Stack.Screen name={'Pokemon'} component={PokemonPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
