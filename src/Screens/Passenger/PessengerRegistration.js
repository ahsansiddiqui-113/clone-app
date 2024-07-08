import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const PassengerRegistration = ({ navigation }) => {
  const [passengerName, setPassengerName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDobPicker, setShowDobPicker] = useState(false);
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [easyPaisaNumber, setEasyPaisaNumber] = useState('');
  const [jazzCashNumber, setJazzCashNumber] = useState('');

  const onChangeDob = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDobPicker(Platform.OS === 'ios');
    setDob(currentDate);
  };

  const showDobPickerMethod = () => {
    setShowDobPicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Passenger Registration</Text>

      <TextInput
        style={styles.input}
        value={passengerName}
        onChangeText={setPassengerName}
        placeholder="Passenger Name"
      />

      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Gender"
      />

      <TouchableOpacity onPress={showDobPickerMethod} style={styles.dateInput}>
        <Text>{dob.toDateString()}</Text>
      </TouchableOpacity>
      {showDobPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dob}
          mode="date"
          display="default"
          onChange={onChangeDob}
        />
      )}

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={whatsappNumber}
        onChangeText={setWhatsappNumber}
        placeholder="Active WhatsApp Number"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        value={easyPaisaNumber}
        onChangeText={setEasyPaisaNumber}
        placeholder="Easy Paisa Number (Optional)"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        value={jazzCashNumber}
        onChangeText={setJazzCashNumber}
        placeholder="Jazz Cash Number (Optional)"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"lightblack",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dateInput: {
    backgroundColor:"offwhite",
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PassengerRegistration;
