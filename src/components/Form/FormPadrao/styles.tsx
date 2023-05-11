import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  infos: {
    display: 'flex',
    gap: 20,
    width: width * 0.8,
  },
  request: {
    width: width * 0.8,
    display: 'flex',
    gap: 20,
  },
  requestText: {
    textTransform: 'uppercase',
    letterSpacing: 4,
    fontWeight: 'bold',
    color: 'white',
  },
  inputs: {
    display: 'flex',
    gap: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 4,
    elevation: 2,
  },
  button: {
    borderRadius: 100,
    elevation: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});

export default styles;
