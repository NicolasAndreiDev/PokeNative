import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: height,
    backgroundColor: 'orange',
  },
  infoPoke: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: height * 0.7,
    width: width * 0.96,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  pokeName: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  linha: {
    width: width * 0.8,
    marginBottom: 20,
    height: 1,
    backgroundColor: 'gray',
    borderRadius: 100,
  },
  pokemonImage: {
    height: 60,
    alignItems: 'center',
  },
  pokemon: {
    position: 'absolute',
    height: height * 0.28,
    top: -160,
    width: height * 0.28,
  },
  pokeInfos: {
    flexDirection: 'row',
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  linhaVertical: {
    height: 32,
    width: 1,
    backgroundColor: 'gray',
  },
  info: {
    alignItems: 'center',
    marginVertical: 16,
  },
  button: {
    padding: 12,
    borderRadius: 100,
    width: width * 0.7,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;
