import {StyleSheet} from 'react-native';
import { Theme } from '../../infrastructure/theme';


const styles = (theme: Theme) => StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: theme.colors.COLOR_FIRST,
      justifyContent: 'center',
      alignItems: 'center'
  },

  card: {
    height: 300,
    width: 200,
    backgroundColor: theme.colors.COLOR_SECOND,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {height: 6 , width: 3},
    shadowOpacity: 0.15,
    shadowRadius: 15,
  }
});

export default styles;
