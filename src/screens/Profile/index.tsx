import React from 'react';
import {View, ScrollView} from 'react-native';
import InfoUser from '../../components/InfoUser';

export default function Profile() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InfoUser />
      </ScrollView>
    </View>
  );
}
