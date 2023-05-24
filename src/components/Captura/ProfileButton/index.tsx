import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import TrainerRostoM from '../../../../assets/Trainer_MRosto.png';
import TrainerRostoF from '../../../../assets/Trainer_FRosto.png';
import {userContext} from '../../../providers/userProvider';

export default function ProfileButton({onPress}: {onPress: () => void}) {
  const {user} = useContext(userContext);

  return (
    <View style={styles.profileBtn} onTouchEnd={onPress}>
      <Image
        source={user?.personagemImage === 'M' ? TrainerRostoM : TrainerRostoF}
        style={styles.image}
      />
    </View>
  );
}
