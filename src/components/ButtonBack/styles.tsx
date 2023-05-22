import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
});

export default styles;
