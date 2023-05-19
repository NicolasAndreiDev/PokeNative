import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import TrainerRosto from '../../../../assets/Trainer_MRosto.png';

export default function ProfileButton({onPress}: {onPress: () => void}) {
  return (
    <View style={styles.profileBtn} onTouchEnd={onPress}>
      <Image source={TrainerRosto} style={styles.image} />
    </View>
  );
}
