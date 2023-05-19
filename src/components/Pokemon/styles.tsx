import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  infoUser: {
    display: 'flex',
    height: height * 0.4,
    alignItems: 'flex-end',
    position: 'relative',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
});

export default styles;
