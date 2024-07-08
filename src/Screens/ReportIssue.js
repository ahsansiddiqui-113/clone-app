import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ReportIssue = () => {
  const navigation = useNavigation();
  const [issueType, setIssueType] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const submitReport = () => {
    if (!issueType || !issueDescription) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    console.log('Submitting report:', issueType, issueDescription);
    Alert.alert('Report Submitted', 'Thank you for your report!');
    setIssueType('');
    setIssueDescription('');
    navigation.navigate('Driver');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Report an Issue</Text>
      <TextInput
        style={styles.input}
        placeholder="Issue Type (e.g., Unsafe driving, Vehicle condition)"
        value={issueType}
        onChangeText={setIssueType}
      />
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description (Provide details about the issue)"
        multiline
        numberOfLines={4}
        value={issueDescription}
        onChangeText={setIssueDescription}
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitReport}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReportIssue;
