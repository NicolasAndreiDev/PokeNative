import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 12,
  },
  containerPersonagem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  personagem: {
    height: height * 0.4,
    width: width * 0.4,
  },
  button: {
    padding: 12,
    width: width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 4,
  },
  input: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    padding: 4,
    color: 'white',
    marginBottom: 12,
  },
  request: {
    marginTop: 20,
  },
});

export default styles;
