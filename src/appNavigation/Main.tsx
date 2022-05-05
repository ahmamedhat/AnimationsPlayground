import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import Animations from '../screens/animationsWithReanimated2/Animations';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PanGestureHandler from '../screens/panGestureHandler/PanGestureHandler';
import FormScreen from '../screens/form/Form';
import { useTheme } from '@react-navigation/native';
import { Theme } from '../infrastructure/theme';

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  const theme = useTheme() as Theme

  return (
    <Drawer.Navigator
      initialRouteName="Form"
      screenOptions={({navigation}) => ({
        drawerStyle: {backgroundColor: theme.colors.COLOR_THIRD},
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity
            style={{marginStart: 15, marginBottom: 3}}
            onPress={() => navigation.toggleDrawer()}>
            <Icon name="bars" size={32} color={theme.colors.COLOR_THIRD} />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen name="Form" component={FormScreen} />
      <Drawer.Screen name="Animations" component={Animations} />
      <Drawer.Screen
        name="GestureHandler"
        component={PanGestureHandler}
        options={{
          title: 'Gesture Handler',
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
