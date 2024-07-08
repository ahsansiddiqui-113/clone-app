import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';


const ProfileScreen = () => {
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carRegistrationNumber, setCarRegistrationNumber] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [acType, setAcType] = useState('');
  const [routeDays, setRouteDays] = useState('');
  const [routeStartTime, setRouteStartTime] = useState(new Date());
  const [returnJourneyTime, setReturnJourneyTime] = useState(new Date());
  const [preferredGender, setPreferredGender] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const handleProfileSubmit = () => {
    if (
      !carMake ||
      !carModel ||
      !carRegistrationNumber ||
      !seatingCapacity ||
      !acType ||
      !routeDays ||
      !routeStartTime ||
      !returnJourneyTime ||
      !preferredGender ||
      !paymentMode
    ) {
      alert('Please fill all the required fields');
      return;
    }

   console.log('Submitting profile data:', {
      carMake,
      carModel,
      carRegistrationNumber,
      seatingCapacity,
      acType,
      routeDays,
      routeStartTime,
      returnJourneyTime,
      preferredGender,
      paymentMode,
    });
  };

  const handleFileUpload = (type) => {
    console.log(`Upload ${type} image`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.heading}>Profile</Text>

      {renderInputField('Car Make (Required):', carMake, setCarMake, 'Enter car make')}
      {renderInputField('Car Model (Required):', carModel, setCarModel, 'Enter car model')}
      
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Picture of License (Front/Back) (Required):</Text>
        <View style={styles.uploadContainer}>
          <TouchableOpacity onPress={() => handleFileUpload('Front')}>
            <Text>Upload Front Image</Text>
          </TouchableOpacity>
          <View style={styles.gap} />
          <TouchableOpacity onPress={() => handleFileUpload('Back')}>
            <Text>Upload Back Image</Text>
          </TouchableOpacity>
        </View>
      </View>

      {renderInputField('Car Registration Number (Required):', carRegistrationNumber, setCarRegistrationNumber, 'Enter registration number')}
      {renderInputField('Total Seating Capacity (Required):', seatingCapacity, setSeatingCapacity, 'Enter seating capacity', 'numeric')}

      {renderPickerField('A/C , Non-A/C (Required):', acType, setAcType, [
        { label: 'A/C', value: 'AC' },
        { label: 'Non-A/C', value: 'Non-AC' },
      ])}

      {renderPickerField('Route Days (Required):', routeDays, setRouteDays, [
        { label: 'Monday - Friday', value: 'Mon-Fri' },
        { label: 'Monday - Saturday', value: 'Mon-Sat' },
        { label: 'Monday - Saturday (half-day)', value: 'Mon-Sat-Half' },
      ])}

      {renderTimePickerField('Route start expected time (Required):', routeStartTime, setRouteStartTime)}
      {renderTimePickerField('Return journey expected time (Required):', returnJourneyTime, setReturnJourneyTime)}

      {renderPickerField('Preferred Passenger Gender (Required):', preferredGender, setPreferredGender, [
        { label: 'Both', value: 'Both' },
        { label: 'Only Male', value: 'Male' },
        { label: 'Only Female', value: 'Female' },
      ])}

      {renderPickerField('Payment Mode (Required):', paymentMode, setPaymentMode, [
        { label: 'Advanced', value: 'Advanced' },
        { label: 'At the end of Month', value: 'EndOfMonth' },
        { label: 'Middle of Month', value: 'MidOfMonth' },
      ])}

      <TouchableOpacity style={styles.submitButton} onPress={handleProfileSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const renderInputField = (label, value, onChangeText, placeholder, keyboardType = 'default') => (
  <View style={styles.fieldContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  </View>
);

const renderPickerField = (label, selectedValue, onValueChange, items) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.pickerContainer}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  </View>
);

const renderTimePickerField = (label, value, onChange) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.label}>{label}</Text>
    <DateTimePicker
      value={value}
      mode="time"
      is24Hour={true}
      display="default"
      onChange={(event, selectedDate) => onChange(selectedDate || value)}
    />
  </View>
);

const styles = StyleSheet.create({
  scrollContent: {

    paddingHorizontal: 30,
    paddingVertical: 30,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    color: '#000000',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gap: {
    width: 10,
  },
  submitButton: {
    backgroundColor: '#ffcf02',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
