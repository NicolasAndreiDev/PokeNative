import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Pokeball from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function RefreshPokemon({
  refreshPoke,
}: {
  refreshPoke: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.refresh}
      onPress={refreshPoke}
      activeOpacity={0.9}>
      <View style={styles.fundo}>
        <Pokeball name={'pokeball'} color={'#6aedaf'} size={32} />
      </View>
    </TouchableOpacity>
  );
}
