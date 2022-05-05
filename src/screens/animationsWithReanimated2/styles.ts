import {StyleSheet} from 'react-native';
import { Colors } from '../../infrastructure/constants';
import { Theme } from '../../infrastructure/theme';

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.COLOR_FIFTH,
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
