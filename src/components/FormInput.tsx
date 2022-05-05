import {View, Text, TextInput} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native'
import { Theme } from '../infrastructure/theme'


interface FormInputProps {
    handleChange: (e:any) => void,
    handleBlur: (e:any) => void,
    value: string,
    secureEntry?: boolean,
    noCapitalize?: boolean,
    placeholder: string
}

const FormInput = (props: FormInputProps) => {
const theme = useTheme() as Theme
  
  return (
    <TextInput
      selectionColor= {theme.colors.COLOR_PRIMARY_GREEN}
      secureTextEntry = {props.secureEntry}
      autoCapitalize = {props.noCapitalize ? 'none' : 'sentences'} 
      onBlur={props.handleBlur}
      onChangeText={props.handleChange}
      autoCorrect={false}
      value={props.value}
      placeholder = {props.placeholder}
      style={{
        height: 50,
        backgroundColor: theme.colors.COLOR_SECONDARY_GREEN,
        borderRadius: 10,
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
        paddingStart: 50,
        width: '100%',
      }}
    />
  );
};

export default FormInput;
