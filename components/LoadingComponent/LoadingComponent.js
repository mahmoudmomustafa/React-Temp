import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import TextComponent from '../TextComponent';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';

const LoadingComponent = () => {
   const { appLoading } = useSelector(state => state.app)

   return (
      appLoading && (
         <View style={styles.container}>
            <View style={styles.modalView}>
               <ActivityIndicator size="small" color={Colors.secondaryColor} />
               <TextComponent style={styles.details}>
                  Processing
               </TextComponent>
            </View>
         </View>
      )
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#0009',
      position: 'absolute',
      height: '100%',
      width: '100%',
      zIndex: 10,
      justifyContent: "center",
      flex: 1,
   },
   modalView: {
      margin: 20,
      backgroundColor: Colors.white,
      borderRadius: 3,
      padding: 25,
      flexDirection: 'row',
      alignItems: 'center'
   },
   details: {
      ...Styles.mediumText,
      fontSize: 18,
      color: Colors.secondaryColor,
      paddingHorizontal: 10
   }
})

export default LoadingComponent;
