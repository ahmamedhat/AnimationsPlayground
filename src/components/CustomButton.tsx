import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../infrastructure/constants'


interface ButtonProps {
    onPress: () => void,
    title: string,
    disabled: any
}

const CustomButton = (props: ButtonProps) => {
  
  return (
    <TouchableOpacity
          onPress={props.onPress}
          disabled = {props.disabled}
          style={styles(props.disabled).container}>
          <Text style={styles(props.disabled).text}>
            {props.title}
          </Text>
        </TouchableOpacity>
  )
}

export default CustomButton


const styles = (disabled: boolean) => StyleSheet.create({
    container: {
        backgroundColor: disabled ? Colors.COLOR_GRAY : Colors.COLOR_PRIMARY_GREEN,
        height: 42,
        margin: 20,
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: disabled ? Colors.COLOR_GRAY : Colors.COLOR_PRIMARY_GREEN,
        shadowOffset: {width: 1, height: 8},
        shadowRadius: 6,
        shadowOpacity: 0.24,
        elevation: 7,
      },
      text: {
        alignSelf: 'center',
        color: Colors.COLOR_OFF_WHITE,
        fontSize: 20,
        fontWeight: '500',
      },
})