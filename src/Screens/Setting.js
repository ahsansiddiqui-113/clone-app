import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SettingPage = ({ navigation }) => {
  const handleLogout = () => {
    console.log("pressed");
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            console.log('Logged out');
            navigation.replace('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.mainContent}>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.settingText}>Notification Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.settingText}>Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Account')}>
          <Text style={styles.settingText}>Account Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
          <Text style={styles.settingText}>Logout</Text>
        </TouchableOpacity>


      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
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
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#ffcf02',
    alignItems: 'center', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  mainContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  settingItem: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center button horizontally
    paddingVertical: 10, // Reduce vertical padding
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  backButtonText: {
    fontSize: 16, // Reduce font size
    color: '#000',
  },
});


export default SettingPage;
