import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Home = ({ navigation }) => {
  //Se muestran los parametros del router a través de la función getParam()
  return (
    <View style={styles.container}>
      <Text>Email: {navigation.getParam('email')}</Text>
      <Text>Password: {navigation.getParam('password')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
