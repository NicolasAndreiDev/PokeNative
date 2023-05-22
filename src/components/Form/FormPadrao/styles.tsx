import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  effect: {
    height: height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  containerImage: {
    width: '100%',
    height: height * 0.156,
    position: 'absolute',
    top: 32,
    alignItems: 'center',
  },
  poke: {
    width: width * 0.8,
    height: height * 0.156,
  },
  trainer: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  infos: {
    display: 'flex',
    gap: 20,
    width: width * 0.7,
  },
  request: {
    width: width * 0.7,
    display: 'flex',
    gap: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  requestText: {
    textTransform: 'uppercase',
    letterSpacing: 4,
    fontWeight: 'bold',
    color: 'white',
  },
  inputs: {
    position: 'relative',
  },
  input: {
    backgroundColor: 'transparent',
    padding: 4,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});

export default styles;
