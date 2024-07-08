import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from 'react-navigation/native'; 
import { submitFeedback } from '../services/feedbackService';

const FeedbackScreen = ({ route }) => {
  const navigation = useNavigation();
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const { driverId } = route.params;

  const handleSubmit = async () => {
    if (!rating || !comments) {
      Alert.alert('Error', 'Please provide both rating and comments.');
      return;
    }

    try {
      await submitFeedback(driverId, rating, comments);
      Alert.alert('Success', 'Thank you for your feedback!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to submit feedback.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leave Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Rating (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Comments"
        value={comments}
        onChangeText={setComments}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
