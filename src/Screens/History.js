import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const History = ({ ride }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Passenger: {ride.passengerName}</Text>
      <Text style={styles.itemText}>From: {ride.fromLocation} To: {ride.toLocation}</Text>
      <Text style={styles.itemText}>Status: {ride.status}</Text>
      <Text style={styles.itemText}>Date: {new Date(ride.date).toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default History;
