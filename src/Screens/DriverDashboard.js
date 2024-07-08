import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const DriverDashboard = ({ navigation }) => {
  const [rideRequests, setRideRequests] = useState([]);

  useEffect(() => {
    fetchRideRequests();
  }, []);

  const fetchRideRequests = async () => {
    try {
      const requests = await getRideRequests(); 
      setRideRequests(requests);
    } catch (error) {
      console.error('Error fetching ride requests:', error);
    }
  };

  const acceptRideRequest = (requestId) => {
    console.log('Accepting ride request:', requestId);
  };

  const renderRideRequestItem = ({ item }) => (
    <TouchableOpacity style={styles.requestItem} onPress={() => acceptRideRequest(item.id)}>
      <Text style={styles.requestText}>Pickup: {item.pickupLocation}</Text>
      <Text style={styles.requestText}>Dropoff: {item.dropoffLocation}</Text>
      <Text style={styles.requestText}>Passenger: {item.passengerName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Driver Dashboard</Text>
      </View>

      <FlatList
        data={rideRequests}
        renderItem={renderRideRequestItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.requestsList}
      />

      <TouchableOpacity style={styles.navigationButton} onPress={() => console.log('Navigate')}>
        <Ionicons name="navigate-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Navigate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reportButton} onPress={() => navigation.navigate('Report')}>
        <Ionicons name="analytics-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  requestsList: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  requestItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  requestText: {
    fontSize: 16,
    marginBottom: 5,
  },
  navigationButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default DriverDashboard;
