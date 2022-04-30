import {View, Text, TextInput} from 'react-native';
import React from 'react';
import { Colors } from '../infrastructure/constants';


interface FormInputProps {
    handleChange: (e:any) => void,
    handleBlur: (e:any) => void,
    value: string,
    secureEntry?: boolean,
    noCapitalize?: boolean,
    placeholder: string
}

const FormInput = (props: FormInputProps) => {
  return (
    <TextInput
      selectionColor= {Colors.COLOR_PRIMARY_GREEN}
      secureTextEntry = {props.secureEntry}
      autoCapitalize = {props.noCapitalize ? 'none' : 'sentences'} 
      onChangeText={props.handleChange}
      autoCorrect={false}
      onBlur={props.handleBlur}
      value={props.value}
      placeholder = {props.placeholder}
      style={{
        height: 50,
        backgroundColor: Colors.COLOR_SECONDARY_GREEN,
        borderRadius: 10,
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
        paddingStart: 50,
        width: '100%',
        marginBottom: 15,
      }}
    />
  );
};

export default FormInput;
