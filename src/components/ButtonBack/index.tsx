import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default function ButtonBack({onBack}: {onBack: () => void}) {
  return (
    <TouchableOpacity style={styles.icon} onPress={onBack} activeOpacity={0.9}>
      <View style={styles.iconBorder}>
        <Icon name="close" color={'#6aedaf'} size={24} />
      </View>
    </TouchableOpacity>
  );
}
