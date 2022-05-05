import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';
import SplashScreen from './src/screens/splash/Splash';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SplashScreen />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
