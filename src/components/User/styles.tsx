import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#4AB583',
  },
  names: {
    position: 'absolute',
    top: 12,
    left: 12,
    fontSize: 24,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pokemonFav: {
    fontWeight: 'bold',
  },
  containerInfo: {
    minHeight: height * 1.2,
  },
  info: {
    width: width * 0.97,
    backgroundColor: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ImagePersonagem: {
    height: 280,
    position: 'absolute',
    width: 100,
    right: 64,
    bottom: -10,
  },
  pokemonImage: {
    position: 'absolute',
  },
  pokeInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 140,
    gap: 20,
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  icon: {
    backgroundColor: '#1D8696',
    height: 48,
    bottom: 0,
    marginBottom: height * 0.06,
    position: 'absolute',
    width: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 4,
  },
  iconBorder: {
    borderWidth: 2,
    borderColor: '#6aedaf',
    borderRadius: 100,
    padding: 6,
  },
  linhaPoke: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  linha: {
    height: 1,
    width: width * 0.36,
    backgroundColor: 'gray',
    borderRadius: 100,
  },
});

export default styles;
