import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginDriver = () => {
    if (email === 'driver@example.com' && password === '1234') { 
      navigation.navigate('Driver'); 
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  const handleLoginPassenger = () => {
    if (email === 'passenger@example.com' && password === '1234') { 
      navigation.navigate('Home'); 
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#999" // Set the placeholder text color
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999" // Set the placeholder text color
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginDriver}>
        <Text style={styles.buttonText}>Log In as a Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPassenger}>
        <Text style={styles.buttonText}>Log In as a Passenger</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default LoginScreen;
