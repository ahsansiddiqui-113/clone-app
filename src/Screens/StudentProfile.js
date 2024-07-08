import React from 'react';
import { View, Text, Button, StyleSheet, Share, Alert } from 'react-native';

const StudentProfile = ({ route, navigation }) => {
  const { student = {} } = route.params || {};

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Track ${student.fullName}'s school pool ride: [Your App URL]/profile/${student.id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Profile</Text>
      <Text style={styles.label}>Full Name: {student.fullName}</Text>
      <Text style={styles.label}>School: {student.schoolName}</Text>
      <Text style={styles.label}>Class: {student.studentClass}</Text>
      <Text style={styles.label}>Pickup Address: {student.homeAddress}</Text>
      <Text style={styles.label}>Dropoff Address: {student.schoolArea}</Text>
      <Button title="Share Profile" onPress={handleShare} />
    </View>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StudentProfile;
