import {Dimensions} from 'react-native';


export enum ScreenDimensions {
  WINDOW_WIDTH = Dimensions.get('window').width,
  WINDOW_HEIGHT = Dimensions.get('window').height
}

