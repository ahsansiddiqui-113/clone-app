import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Link } from '@react-navigation/native';


const HomePage = ({ navigation }) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [fare, setFare] = useState(null);
  const [selectedRide, setSelectedRide] = useState(null);

  const rideOptions = [
    { type: 'Car AC', icon: 'directions-car', fuelMultiplier: 1.2 },
    { type: 'Car', icon: 'directions-car', fuelMultiplier: 1.0 },
    { type: 'Car Mini', icon: 'directions-car', fuelMultiplier: 0.8 },
    { type: 'Motorbike', icon: 'motorcycle', fuelMultiplier: 0.5 },
    { type: 'Cargo', icon: 'local-shipping', fuelMultiplier: 1.5 },
  ];

  const handleSchoolPool = () => {
    const student = {
      id: '1',
      fullName: 'Ahsan Siddiqui',
      schoolName: 'POF Model High School',
      studentClass: '10th Grade',
      homeAddress: 'Wah Cantt',
      schoolArea: 'taxila',

    };
    navigation.navigate('Students', { student });
  };

  const calculateFare = () => {
    if (!startLocation || !endLocation || !selectedRide) {
      Alert.alert('Error', 'Please select start location, end location, and a ride option.');
      return;
    }
    const baseFare = Math.random() * (100 - 5) + 5;
    const fareEstimate = baseFare * selectedRide.fuelMultiplier;
    setFare(fareEstimate.toFixed(2));
  };

  const handleBooking = () => {

    navigation.navigate('Booking', {
      startLocation,
      endLocation,
      rideType: selectedRide.type,
      fare,
    });
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity style={styles.studentItem} onPress={() => handleStudentProfile(item)}>
      <Text style={styles.studentName}>{item.fullName}</Text>
      <Text style={styles.studentDetails}>School: {item.schoolName}</Text>
      <Text style={styles.studentDetails}>Class: {item.studentClass}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Careem</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSchoolPool}>
      <Text style={styles.buttonText}>Register for School Pool? </Text>


      </TouchableOpacity>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
        </MapView>
      </View>

      <ScrollView style={styles.mainContent}>
        <Text style={styles.heading}>Search and Book Your Ride</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter start location"
          value={startLocation}
          onChangeText={setStartLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter end location"
          value={endLocation}
          onChangeText={setEndLocation}
        />
        <Text style={styles.subHeading}>Select a Ride</Text>
        <View style={styles.rideOptions}>
          {rideOptions.map((ride) => (
            <TouchableOpacity
              key={ride.type}
              style={[
                styles.rideOption,
                selectedRide?.type === ride.type && styles.selectedRideOption,
              ]}
              onPress={() => setSelectedRide(ride)}
            >
              <MaterialIcons name={ride.icon} size={24} color="black" />
              <Text style={styles.rideText}>{ride.type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.fareButton} onPress={calculateFare}>
          <Text style={styles.buttonText}>Calculate Fare</Text>
        </TouchableOpacity>
        {fare && <Text style={styles.fareText}>Estimated Fare: ${fare}</Text>}
        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Explore')}>
          <Ionicons name="navigate-outline" size={24} color="black" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Setting')}>
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  headerText: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  mapContainer: {
    flex: 1,
    marginBottom: 60,  
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mainContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 60,  
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  rideOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    alignItems: 'center',
  },
  rideOption: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '18%',
  },
  selectedRideOption: {
    backgroundColor: '#ddd',
  },
  rideText: {
    marginTop: 5,
    fontSize: 12,
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
  fareButton: {
    backgroundColor: '#ffcf02',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fareText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  bookButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff', 
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});


export default HomePage;
