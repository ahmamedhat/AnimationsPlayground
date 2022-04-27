import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/appNavigation/Main';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
     </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
