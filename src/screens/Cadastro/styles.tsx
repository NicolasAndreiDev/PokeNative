import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
  },
});

export default styles;
