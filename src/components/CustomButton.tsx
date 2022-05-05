import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../infrastructure/theme'


interface ButtonProps {
    onPress: () => void,
    title: string,
    disabled: any
}

const CustomButton = (props: ButtonProps) => {
  const theme = useTheme() as Theme
  
  return (
    <TouchableOpacity
          onPress={props.onPress}
          disabled = {props.disabled}
          style={styles(props.disabled, theme).container}>
          <Text style={styles(props.disabled, theme).text}>
            {props.title}
          </Text>
        </TouchableOpacity>
  )
}

export default CustomButton


const styles = (disabled: boolean, theme: Theme) => StyleSheet.create({
    container: {
        backgroundColor: disabled ? theme.colors.COLOR_GRAY : theme.colors.COLOR_PRIMARY_GREEN,
        height: 42,
        margin: 20,
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: disabled ? theme.colors.COLOR_GRAY : theme.colors.COLOR_PRIMARY_GREEN,
        shadowOffset: {width: 1, height: 8},
        shadowRadius: 6,
        shadowOpacity: 0.24,
        elevation: 7,
      },
      text: {
        alignSelf: 'center',
        color: theme.colors.COLOR_OFF_WHITE,
        fontSize: 20,
        fontWeight: '500',
      },
})