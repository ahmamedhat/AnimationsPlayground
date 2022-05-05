import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@react-navigation/native';
import {Theme} from '../infrastructure/theme';

interface InputValidationCircleProps {
  error: string | undefined;
  touched: boolean | undefined;
  value: string;
}

const InputValidationCircle = (props: InputValidationCircleProps) => {
  const theme = useTheme() as Theme;

  return (
    <View
      style={{
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:
          props.error && props.value.trim() != ''
            ? theme.colors.COLOR_DANGER
            : props.value.trim() != ''
            ? theme.colors.COLOR_SUCCESS
            : 'rgba(0,0,0,0)',
        position: 'absolute',
        right: 10,
        top: 15,
      }}>
      {props.error && props.value.trim() != '' ? (
        <Icon name="times" size={12} color={theme.colors.COLOR_OFF_WHITE} />
      ) : props.value.trim() != '' ? (
        <Icon name="check" size={10} color={theme.colors.COLOR_OFF_WHITE} />
      ) : null}
    </View>
  );
};

export default InputValidationCircle;
