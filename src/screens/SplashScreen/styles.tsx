import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    width: width * 0.8,
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 54,
    width: 54,
  },
  load: {
    width: width * 0.8,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 100,
    marginBottom: 40,
    overflow: 'hidden',
  },
  loader: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: 'rgb(119, 252, 104)',
  },
});

export default styles;
