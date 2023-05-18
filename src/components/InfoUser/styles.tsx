import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  infoUser: {
    display: 'flex',
    height: height * 0.4,
    alignItems: 'flex-end',
    position: 'relative',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  perfilImage: {
    height: 48,
    width: 48,
    borderRadius: 100,
  },
  trainer: {
    height: height * 0.32,
    width: width * 0.28,
    zIndex: 1,
    position: 'relative',
  },
  pokemon: {
    position: 'relative',
    marginRight: 4,
  },
});

export default styles;
