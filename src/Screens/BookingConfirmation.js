import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookingConfirmation = ({ navigation, route }) => {
  const { startLocation, endLocation, rideType, fare } = route.params;

  const handleOK = () => {
    navigation.navigate('Home');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking Confirmation</Text>
      <View style={styles.bookingDetails}>
        <Text style={styles.detailText}>Start Location: {startLocation}</Text>
        <Text style={styles.detailText}>End Location: {endLocation}</Text>
        <Text style={styles.detailText}>Ride Type: {rideType}</Text>
        <Text style={styles.detailText}>Fare: ${fare}</Text>
      </View>
      <TouchableOpacity style={styles.okButton} onPress={handleOK}>
        <Text style={styles.okButtonText}>OK</Text>
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
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingDetails: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
  },
  okButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingConfirmation;
