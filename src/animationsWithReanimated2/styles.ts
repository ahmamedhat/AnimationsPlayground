import {StyleSheet} from 'react-native';
import { Colors } from '../infrastructure/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_FIFTH,
  },

  shape: {
    justifyContent: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {height: 10, width: 0},
  },
});

export default styles;
