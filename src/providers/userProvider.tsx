import React, {useCallback} from 'react';
import {createContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type UserProps = {
  user: {
    username: string;
    personagemImage: string;
    email: string;
    pokemons: [];
    pokemonFav: number;
  } | null;
  updatePokemon: () => void;
};

export const userContext = createContext<UserProps>({
  user: null,
  updatePokemon: () => {},
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<{
    username: string;
    personagemImage: string;
    email: string;
    pokemons: [];
    pokemonFav: number;
  } | null>(null);

  const email = auth().currentUser?.email;

  const updatePokemon = useCallback(async () => {
    try {
      const userSnapshot = await firestore()
        .collection('users')
        .doc(`${email}`)
        .get({source: 'server'});

      if (userSnapshot.exists) {
        const userData = userSnapshot.data();
        setUser({
          username: userData?.username,
          personagemImage: userData?.personagemImage,
          email: userData?.email,
          pokemons: userData?.pokemons,
          pokemonFav: userData?.pokemonFav,
        });
      }
    } catch {
      console.error('Erro');
    }
  }, [email]);

  useEffect(() => {
    updatePokemon();
  }, [updatePokemon]);

  return (
    <userContext.Provider value={{user, updatePokemon}}>
      {children}
    </userContext.Provider>
  );
};
