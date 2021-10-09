import React from 'react'
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import TextComponent from '../TextComponent/TextComponent';
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

const ToastComponent = () => {
   const { toast, toastMsg } = useSelector(state => state.app)

   return (
      toast && (
         <View style={styles.container}>
            <TextComponent style={styles.text}>
               {toastMsg}
            </TextComponent>
         </View>
      )
   )
}

export default ToastComponent;

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      width: '100%',
      padding: 10,
      bottom: 0,
      backgroundColor: '#000000d4',
      justifyContent: "center",
      alignItems: "center"
   },
   text: {
      ...Styles.mediumText,
      fontSize: 17,
      color: Colors.white,
      textTransform: "capitalize",
      textAlign: 'center',
      padding: 5
   },
});
