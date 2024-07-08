import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const profiles = [
    { id: 1, carMake: 'Toyota', carModel: 'Camry', seatingCapacity: 4, acType: 'AC', routeDays: 'Mon-Fri', preferredGender: 'Both', routeCharges: 200, paymentMode: 'Advanced' },
    { id: 2, carMake: 'Honda', carModel: 'Civic', seatingCapacity: 5, acType: 'Non-AC', routeDays: 'Mon-Sat', preferredGender: 'Male', routeCharges: 150, paymentMode: 'EndOfMonth' },
  ];

  useEffect(() => {
    const filtered = profiles.filter(profile =>
      profile.carMake.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.carModel.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProfiles(filtered);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search by car make or model"
      />
      <ScrollView style={styles.profileList}>
        {filteredProfiles.map(profile => (
          <TouchableOpacity key={profile.id} style={styles.profileItem} onPress={() => { /* Handle profile click */ }}>
            <Text style={styles.profileTitle}>{profile.carMake} {profile.carModel}</Text>
            <Text>Seating Capacity: {profile.seatingCapacity}</Text>
            <Text>A/C Type: {profile.acType}</Text>
            <Text>Route Days: {profile.routeDays}</Text>
            <Text>Preferred Gender: {profile.preferredGender}</Text>
            <Text>Route Charges: {profile.routeCharges}</Text>
            <Text>Payment Mode: {profile.paymentMode}</Text>
          </TouchableOpacity>
        ))}
        {filteredProfiles.length === 0 && <Text style={styles.emptyState}>No profiles found</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'lightgreen',
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  profileList: {
    flex: 1,
  },
  profileItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emptyState: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default ExploreScreen;
