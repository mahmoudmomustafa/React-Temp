import React from 'react'
import { TextInput } from 'react-native';
import TextComponent from '../TextComponent/TextComponent';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const InputComponent = (props) => {
   return (
      <>
         <TextInput
            onChangeText={props.change}
            onBlur={props.blur}
            placeholder={props.placeholderText}
            value={props.inputValue}
            style={[Styles.textInput, props.style]}
            secureTextEntry={props.secure ? props.secure : false}
            placeholderTextColor={Colors.borderColor}
            multiline={props.textArea ? true : false}
            numberOfLines={props.textArea ? 5 : 1}
            textContentType={props.inputType}
            keyboardType={props.keyboard ? props.keyboard : 'default'}
         />
         {props.touched && props.errors && (
            <TextComponent style={Styles.errorText}>
               {props.errors}
            </TextComponent>
         )}
      </>
   )
}

export default InputComponent;
