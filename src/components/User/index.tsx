import React, {useEffect, useState} from 'react';
import {Image, View, ScrollView, Dimensions, Text} from 'react-native';
import TrainerM from '../../../assets/Trainer_M.png';
import TrainerF from '../../../assets/Trainer_F.png';
import styles from './styles';
import PokemonCard from '../PokemonCard';
import ButtonBack from '../ButtonBack';
import API from '../../utils/Api';
import {useContext} from 'react';
import {userContext} from '../../providers/userProvider';

const height = Dimensions.get('window').height;

export default function User({
  onBack,
  onTouch,
}: {
  onBack: () => void;
  onTouch: (value: number) => void;
}) {
  const [pokemon, setPokemon] = useState<{
    height: number;
    name: string;
    sprites?: {
      other?: {
        home?: {
          front_default?: string;
        };
      };
    };
  }>({
    height: 0,
    name: '',
  });
  const {user} = useContext(userContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (user?.pokemonFav) {
        const pokemonData = await API({id: user?.pokemonFav});
        setPokemon(pokemonData);
      }
    };

    fetchPokemon();
  }, [user]);

  const pokemonHeigth = pokemon?.height < 8 ? 8 : pokemon.height;

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerInfo}>
            <View style={styles.userInfo}>
              <View style={styles.names}>
                <Text style={styles.username}>{user?.username}</Text>
                <Text style={styles.pokemonFav}>
                  {user?.pokemonFav ? `& ${pokemon.name}` : ''}
                </Text>
              </View>
              {pokemon.sprites?.other?.home?.front_default ? (
                <Image
                  source={{uri: `${pokemon.sprites.other.home.front_default}`}}
                  style={[
                    styles.pokemonImage,
                    {
                      height:
                        (pokemonHeigth < 20
                          ? height * pokemonHeigth
                          : height * 16) / 40,
                      width:
                        (pokemonHeigth < 20
                          ? height * pokemonHeigth
                          : height * 16) / 40,
                    },
                  ]}
                />
              ) : (
                ''
              )}
              <Image
                source={user?.personagemImage === 'M' ? TrainerM : TrainerF}
                style={styles.ImagePersonagem}
              />
            </View>
            <View style={styles.linhaPoke}>
              <View style={styles.linha} />
              <Text>Pokemons</Text>
              <View style={styles.linha} />
            </View>
            <View style={styles.pokeInfo}>
              {user?.pokemons
                ? user.pokemons.map((pokeId, index) => {
                    const key = `${pokeId}-${index}`;
                    return (
                      <PokemonCard
                        key={key}
                        onTouch={onTouch}
                        idPokemon={pokeId}
                      />
                    );
                  })
                : ''}
            </View>
          </View>
        </ScrollView>
      </View>
      <ButtonBack onBack={onBack} />
    </View>
  );
}
