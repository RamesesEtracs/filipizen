import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import buttonStyles from './button.style'

const Button: React.FC<buttonProperties> = ({
  buttonName,
  buttonColor,
  buttonNameColor,
  buttonLayout,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...buttonStyles.container,
          ...buttonLayout,
          backgroundColor: buttonColor,
        }}
      >
        <Text style={{ color: buttonNameColor }}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button
