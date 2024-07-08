import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';


const StudentRegistration = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: '',
    parentName: '',
    gender: '',
    dob: '',
    schoolName: '',
    studentClass: '',
    schoolArea: '',
    homeAddress: '',
    homeLocation: '',
    pickupTime: '',
    dropoffTime: '',
    primaryContact: '',
    emergencyContact: '',
    studentImage: null,
  });

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, studentImage: result.uri });
    }
  };

  const handleSubmit = () => {
    Alert.alert('Registration Submitted', 'Your school pool registration has been submitted.');
    navigation.navigate('StudentProfile');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>School Pool Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={form.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Father / Mother Name"
        value={form.parentName}
        onChangeText={(text) => handleInputChange('parentName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={form.gender}
        onChangeText={(text) => handleInputChange('gender', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="D.O.B"
        value={form.dob}
        onChangeText={(text) => handleInputChange('dob', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="School Name"
        value={form.schoolName}
        onChangeText={(text) => handleInputChange('schoolName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
        value={form.studentClass}
        onChangeText={(text) => handleInputChange('studentClass', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Area/Location of School"
        value={form.schoolArea}
        onChangeText={(text) => handleInputChange('schoolArea', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup/Drop-off Home Address"
        value={form.homeAddress}
        onChangeText={(text) => handleInputChange('homeAddress', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup/Drop-off Home Location"
        value={form.homeLocation}
        onChangeText={(text) => handleInputChange('homeLocation', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup Estimated Time"
        value={form.pickupTime}
        onChangeText={(text) => handleInputChange('pickupTime', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Drop-off Estimated Time"
        value={form.dropoffTime}
        onChangeText={(text) => handleInputChange('dropoffTime', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Primary Contact No."
        value={form.primaryContact}
        onChangeText={(text) => handleInputChange('primaryContact', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Contact No."
        value={form.emergencyContact}
        onChangeText={(text) => handleInputChange('emergencyContact', text)}
      />

      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
        {form.studentImage ? (
          <Image source={{ uri: form.studentImage }} style={styles.image} />
        ) : (
          <Text>Upload Student Image</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Button title="Submit" onPress={handleSubmit} color={styles.button.color} />
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor:"black",
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  imagePicker: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  touchable: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    color: '#fff', 
  },
});

export default StudentRegistration;
