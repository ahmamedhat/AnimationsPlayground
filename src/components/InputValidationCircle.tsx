import {View} from 'react-native';
import React from 'react';
import {Colors} from '../infrastructure/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface InputValidationCircleProps {
  error: string | undefined;
  touched: boolean | undefined;
}

const InputValidationCircle = (props: InputValidationCircleProps) => {
  return (
    <View
      style={{
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:
          props.error && props.touched
            ? Colors.COLOR_DANGER
            : props.touched
            ? Colors.COLOR_SUCCESS
            : 'rgba(0,0,0,0)',
        position: 'absolute',
        right: 10,
        top: 15,
      }}>
      {props.error && props.touched ? (
        <Icon name="times" size={12} color={Colors.COLOR_OFF_WHITE} />
      ) : props.touched ? (
        <Icon name="check" size={10} color={Colors.COLOR_OFF_WHITE} />
      ) : null}
    </View>
  );
};

export default InputValidationCircle;
