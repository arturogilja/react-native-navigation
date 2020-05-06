import React from 'react'
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native'
import useInput from '../hooks/useInput'

const Login = ({ navigation }) => {
  const [email, bindEmail] = useInput('')
  const [password, bindPassword] = useInput('')

  const onPressLogin = (e) => {
    //Sólo se valida que el email no sea vacío y la contraseña sea 1234567890
    if (email !== '' && password === '1234567890') {
      //Se navega a la vista Home, pasando el email y la contraseña
      navigation.navigate('Home', { email, password })
    } else {
      Alert.alert('Error', 'Tus credenciales son incorrectas', [{ text: 'OK', onPress: () => console.log('OK Pressed') }])
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Email </Text>
      <TextInput style={styles.field} {...bindEmail} autoCompleteType="email" />
      <Text style={styles.label}> Password </Text>
      <TextInput style={styles.field} {...bindPassword} autoCompleteType="password" secureTextEntry={true} />
      <Button title="Iniciar Sesión" onPress={onPressLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  field: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 15,
    borderRadius: 5,
    width: '90%',
  },
})

export default Login
