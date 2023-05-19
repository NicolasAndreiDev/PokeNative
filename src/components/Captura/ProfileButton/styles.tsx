import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileBtn: {
    position: 'absolute',
    height: 54,
    width: 54,
    bottom: 40,
    left: 40,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    borderRadius: 100,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'rgba(0,0,0, 0.6)',
    overflow: 'hidden',
  },
  image: {
    height: 54,
    width: 54,
    position: 'absolute',
    top: -6,
    borderRadius: 100,
  },
});

export default styles;
