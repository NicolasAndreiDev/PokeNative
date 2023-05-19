import React from 'react';
import {View} from 'react-native';
import Pokeball from 'react-native-vector-icons/MaterialCommunityIcons';
import Refresh from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';

export default function RefreshPokemon({
  refreshPoke,
}: {
  refreshPoke: () => void;
}) {
  return (
    <View
      style={[styles.refresh, {bottom: 0, right: 0}]}
      onTouchEnd={refreshPoke}>
      <Refresh
        name={'refresh'}
        color={'white'}
        size={54}
        style={[styles.refresh, {right: 40}]}
      />
      <Pokeball
        name={'pokeball'}
        color={'white'}
        size={24}
        style={[styles.refresh, {right: 25, bottom: 24}]}
      />
    </View>
  );
}
