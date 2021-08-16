import React from 'react'
import { Text } from 'react-native';

const TextComponent = (props) => {
   return (
      <Text {...props} style={[{ textAlign: 'left' }, props.style]}>
         {props.children}
      </Text>
   )
}

export default TextComponent;