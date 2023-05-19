import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import TrainerM from '../../../assets/Trainer_M.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default function User({onBack}: {onBack: () => void}) {
  return (
    <View style={{height: '100%'}}>
      <Image source={TrainerM} style={{height: 300, width: 100}} />
      <TouchableOpacity
        style={styles.icon}
        onPress={onBack}
        activeOpacity={0.9}>
        <View style={styles.iconBorder}>
          <Icon name="close" color={'#6aedaf'} size={24} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
