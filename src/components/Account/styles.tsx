import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  effect: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerImage: {
    width: '100%',
    height: height * 0.156,
    position: 'absolute',
    top: 32,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  image: {
    width: width * 0.8,
    height: height * 0.156,
  },
  buttons: {
    marginBottom: '32%',
    gap: 32,
  },
  button: {
    width: width * 0.8,
    padding: 12,
    borderRadius: 100,
  },
  button2: {
    width: width * 0.8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#6aedaf',
    borderRadius: 100,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  text2: {
    color: '#6aedaf',
  },
});

export default styles;
