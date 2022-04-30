import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Animations from '../screens/animationsWithReanimated2/Animations';
import {Colors} from '../infrastructure/constants';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PanGestureHandler from '../screens/panGestureHandler/PanGestureHandler';
import FormScreen from '../screens/form/Form';

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Form"
      screenOptions={({navigation}) => ({
        drawerStyle: {backgroundColor: Colors.COLOR_THIRD},
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity
            style={{marginStart: 15, marginBottom: 3}}
            onPress={() => navigation.toggleDrawer()}>
            <Icon name="bars" size={32} color={Colors.COLOR_THIRD} />
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
