import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import {Theme} from '../infrastructure/theme';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/actions/theme';
import {useTranslation} from 'react-i18next';

const CustomDrawer = (props: any) => {
  const theme = useTheme() as Theme;
  const dispatch = useDispatch();
  const themeState = useSelector((state: any) => state.theme.currentTheme);

  const toggleSwitch = () => {
    dispatch(toggleTheme(themeState == 'light' ? 'dark' : 'light'));
  };

  const {i18n} = useTranslation();

  const setLanguage = (code: string) => {
    return i18n.changeLanguage(code);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '25%',
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.COLOR_GRAY,
        }}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 16, marginEnd: 20, fontWeight: '600'}}>
          Dark Mode
        </Text>
        <Switch
          trackColor={{
            false: theme.colors.COLOR_GRAY,
            true: theme.colors.COLOR_PRIMARY_GREEN,
          }}
          thumbColor={theme.colors.COLOR_OFF_WHITE}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={themeState == 'light' ? false : true}
        />
      </View>
      <View style={{marginStart: 20}}>
        <TouchableOpacity onPress={() => setLanguage('ar')}>
          <Text>العربية</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLanguage('en')}>
          <Text>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
