import React from 'react'
import { View, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Text>SignInScreen</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
})

export default SignInScreen;