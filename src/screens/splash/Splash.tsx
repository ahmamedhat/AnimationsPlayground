import React, {useEffect, useState} from 'react';
import {Appearance, View} from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../../store/actions/theme';
import {Text} from 'moti';
import MainNavigation from '../../appNavigation/Main';
import { DarkTheme, LightTheme } from '../../infrastructure/theme';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state: any) => state.theme.currentTheme);
  const colorScheme = Appearance.getColorScheme();

  Appearance.addChangeListener(({colorScheme}) => {
    dispatch(toggleTheme(colorScheme ? colorScheme : 'light'));
  });

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    dispatch(toggleTheme(colorScheme ? colorScheme : 'light'));

    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  return (
    <NavigationContainer
      theme={themeState === 'light' ? LightTheme : DarkTheme}>
      {isReady && <MainNavigation />}
      {!isReady && (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Splash</Text>
        </View>
      )}
    </NavigationContainer>
  );
};

export default SplashScreen;
