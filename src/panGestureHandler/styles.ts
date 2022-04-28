import {StyleSheet} from 'react-native';
import { Colors } from '../infrastructure/constants';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: Colors.COLOR_FIRST,
      justifyContent: 'center',
      alignItems: 'center'
  },

  card: {
    height: 300,
    width: 200,
    backgroundColor: Colors.COLOR_FOURTH,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {height: 6 , width: 3},
    shadowOpacity: 0.15,
    shadowRadius: 15,
  }
});

export default styles;
