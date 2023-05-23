import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerChance: {
    width: 160,
    borderRadius: 100,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 112,
    backgroundColor: '#1D8696',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  chance: {
    flexDirection: 'row',
    borderColor: '#6aedaf',
    borderWidth: 2,
    width: 150,
    borderRadius: 100,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  pokeChance: {
    height: 24,
    width: 24,
  },
  pokebola: {
    height: 54,
    width: 54,
  },
  poke: {
    position: 'absolute',
    bottom: 40,
  },
});

export default styles;
