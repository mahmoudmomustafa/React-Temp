import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

const HomeScreen = () => {
   return (
      <ScrollView style={styles.container}>
         <Text>Home Screen</Text>
      </ScrollView>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})
export default HomeScreen;