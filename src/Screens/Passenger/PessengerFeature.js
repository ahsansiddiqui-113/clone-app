import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, DatePickerIOS } from 'react-native';

const PassengerFeatures = ({ navigation }) => {
  const [startingLocation, setStartingLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [selectedCaptain, setSelectedCaptain] = useState(null);
  const [bookingTime, setBookingTime] = useState(new Date());
  const [advancedBooking, setAdvancedBooking] = useState(false);

  const searchCaptains = () => {
    const availableCaptains = [
      { id: 1, name: 'Captain John', rating: 4.5, carType: 'Sedan', availableSeats: 3 },
      { id: 2, name: 'Captain Sarah', rating: 4.8, carType: 'SUV', availableSeats: 4 },
      { id: 3, name: 'Captain Mike', rating: 4.2, carType: 'Hatchback', availableSeats: 2 },
    ];

    console.log('Available Captains:');
    availableCaptains.forEach(captain => {
      console.log(`ID: ${captain.id}, Name: ${captain.name}, Rating: ${captain.rating}, Car Type: ${captain.carType}, Available Seats: ${captain.availableSeats}`);
    });
  };

  const handleCaptainSelection = (captain) => {
    setSelectedCaptain(captain);
  };

  const confirmOffer = () => {
    console.log('Offer confirmed.');
    Alert.alert('Offer Confirmed', 'Your offer has been confirmed. You can now proceed with the booking.');
  };

  const sendCustomOffer = () => {
    console.log('Custom offer sent.');
    Alert.alert('Custom Offer Sent', 'Your custom offer has been sent to the selected captain.');
  };

  const openWhatsAppChat = () => {
    console.log('Opening WhatsApp chat...');
  };

  const handleAdvancedBooking = () => {
    setAdvancedBooking(true);
    searchCaptains();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Passenger Features</Text>
      </View>

      <View style={styles.mainContent}>
        <TextInput
          style={styles.input}
          value={startingLocation}
          onChangeText={setStartingLocation}
          placeholder="Enter starting location"
        />
        <TextInput
          style={styles.input}
          value={dropOffLocation}
          onChangeText={setDropOffLocation}
          placeholder="Enter drop-off location"
        />
        <TouchableOpacity style={styles.button} onPress={searchCaptains}>
          <Text style={styles.buttonText}>Search Captains</Text>
        </TouchableOpacity>

        {selectedCaptain && (
          <View style={styles.selectedCaptain}>
            <Text style={styles.selectedCaptainText}>Selected Captain: {selectedCaptain.name}</Text>
            <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsAppChat}>
              <Text style={styles.buttonText}>Chat on WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={confirmOffer}>
              <Text style={styles.buttonText}>Confirm Offer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={sendCustomOffer}>
              <Text style={styles.buttonText}>Send Custom Offer</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Advanced Booking Section */}
        <View style={styles.advancedBookingContainer}>
          <Text style={styles.sectionTitle}>Advanced Booking</Text>
          <DatePickerIOS
            date={bookingTime}
            onDateChange={setBookingTime}
            mode="datetime"
          />
          <TouchableOpacity style={styles.button} onPress={handleAdvancedBooking}>
            <Text style={styles.buttonText}>Book in Advance</Text>
          </TouchableOpacity>
        </View>

        {advancedBooking && (
          <View style={styles.availableCaptainsContainer}>
            <Text style={styles.sectionTitle}>Available Captains</Text>
          
            <View style={styles.captain}>
              <Text>Captain John</Text>
              <Text>Rating: 4.5</Text>
              <Text>Car Type: Sedan</Text>
              <Text>Available Seats: 3</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleCaptainSelection({ id: 1, name: 'Captain John', rating: 4.5, carType: 'Sedan', availableSeats: 3 })}>
                <Text style={styles.buttonText}>Select</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.captain}>
              <Text>Captain Sarah</Text>
              <Text>Rating: 4.8</Text>
              <Text>Car Type: SUV</Text>
              <Text>Available Seats: 4</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleCaptainSelection({ id: 2, name: 'Captain Sarah', rating: 4.8, carType: 'SUV', availableSeats: 4 })}>
                <Text style={styles.buttonText}>Select</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.captain}>
              <Text>Captain Mike</Text>
              <Text>Rating: 4.2</Text>
              <Text>Car Type: Hatchback</Text>
              <Text>Available Seats: 2</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleCaptainSelection({ id: 3, name: 'Captain Mike', rating: 4.2, carType: 'Hatchback', availableSeats: 2 })}>
                <Text style={styles.buttonText}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#ffcf02',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  selectedCaptain: {
    marginTop: 20,
  },
  selectedCaptainText: {
    fontSize: 18,
    marginBottom: 10,
  },
  advancedBookingContainer: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  availableCaptainsContainer: {
    marginTop: 20,
  },
  captain: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});

export default PassengerFeatures;
