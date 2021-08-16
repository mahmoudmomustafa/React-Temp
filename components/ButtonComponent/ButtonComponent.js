import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import TextComponent from '../TextComponent';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const ButtonComponent = (props) => {
   const btnBgColor = props.filled ? Colors.tint : 'transparent'
   const btnTextColor = props.filled ? Colors.white : Colors.tint
   const normalBtn = props.normal ? 'right' : 'center'
   const transformText = props.normal ? 'capitalize' : 'uppercase'
   const borderWidth = props.normal ? 1 : 0

   const Btn = {
      backgroundColor: btnBgColor,
      padding: 5,
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 20,
      borderBottomWidth: borderWidth,
      borderColor: Colors.borderColor
   }
   const btnText = {
      ...Styles.mediumText,
      textAlign: normalBtn,
      fontSize: 16,
      color: btnTextColor,
      textTransform: transformText
   }
   return (
      <TouchableOpacity
         activeOpacity={0.8}
         onPress={!props.submitLoading && props.handle}
         style={[Btn, props.btnStyle]}>
         {
            props.submitLoading ? (
               <ActivityIndicator size="small" color={btnTextColor} style={btnText} />
            )
               : (
                  <TextComponent style={[btnText, props.textStyle]}>
                     {props.text}
                  </TextComponent>
               )
         }
      </TouchableOpacity >
   )
}

export default ButtonComponent;