import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [driverName, setDriverName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [easyPaisaNumber, setEasyPaisaNumber] = useState('');
  const [jazzCashNumber, setJazzCashNumber] = useState('');

  const handleSignUp = () => {
    console.log('Driver registration:', {
      driverName,
      gender,
      dob,
      email,
      whatsappNumber,
      easyPaisaNumber,
      jazzCashNumber
    });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
          value={driverName}
          onChangeText={setDriverName}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          placeholderTextColor="#999"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (D.O.B)"
          placeholderTextColor="#999"
          value={dob}
          onChangeText={setDOB}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Active WhatsApp Number"
          placeholderTextColor="#999"
          value={whatsappNumber}
          onChangeText={setWhatsappNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Easy Paisa (Optional)"
          placeholderTextColor="#999"
          value={easyPaisaNumber}
          onChangeText={setEasyPaisaNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Jazz Cash  (Optional)"
          placeholderTextColor="#999"
          value={jazzCashNumber}
          onChangeText={setJazzCashNumber}
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
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
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupButton: {
    backgroundColor: '#FFCC00',
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
  loginText: {
    color: '#0000FF',
    textDecorationLine: 'underline',
  },
});

export default RegistrationScreen;
