import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {StatusBar} from 'react-native';
import Profile from './src/screens/Profile';
import SplashScreen from './src/screens/SplashScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import UserType from './src/screens/UserType';
import Cadastro from './src/screens/Cadastro';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name={'SplashScreen'}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'UserType'}
          component={UserType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Cadastro'}
          component={Cadastro}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Main'} options={{headerShown: false}}>
          {() => (
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'black'}}>
              <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                  tabBarLabel: '',
                  // eslint-disable-next-line react/no-unstable-nested-components
                  tabBarIcon: ({color, size}) => {
                    return (
                      <Icon
                        name="home"
                        color={color}
                        size={size}
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{position: 'absolute', bottom: 0}}
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name={'Profile'}
                component={Profile}
                options={{
                  title: 'Nicolas',
                  tabBarLabel: '',
                  // eslint-disable-next-line react/no-unstable-nested-components
                  tabBarIcon: ({color, size}) => {
                    return (
                      <Icon
                        name="user"
                        color={color}
                        size={size}
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{position: 'absolute', bottom: 0}}
                      />
                    );
                  },
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
