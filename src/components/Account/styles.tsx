import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

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
    height: height * 0.146,
    position: 'absolute',
    top: 32,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    width: width * 0.8,
    height: height * 0.146,
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
    color: 'rgb(119, 252, 104)',
    borderColor: 'rgb(119, 252, 104)',
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
    color: 'rgb(119, 252, 104)',
  },
});

export default styles;
