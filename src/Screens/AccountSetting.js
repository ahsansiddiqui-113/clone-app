import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, TextInput, StyleSheet } from 'react-native';
import { launchImageLibrary,} from 'react-native-image-picker';

const AccountSetting = ({ navigation }) => {
  const [accountType, setAccountType] = useState('driver');
  const [contactInfo, setContactInfo] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [newContact, setNewContact] = useState('');

  const switchAccountType = (type) => {
    setAccountType(type);
    if (type === 'passenger') {
      navigation.navigate('Registration');
    } else {
      Alert.alert('Account Type Switched', `You are now a ${type}.`);
    }
  };

  const handleProfilePictureUpdate = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Error', 'There was an error selecting the image.');
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        console.log('Image URI: ', source);
        Alert.alert('Profile Picture', 'Profile picture updated successfully.');
      }
    });
  };

  const handleChangePassword = () => {
    Alert.prompt('Change Password', 'Enter your old password:', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Next',
        onPress: (oldPass) => {
          setOldPassword(oldPass);
          Alert.prompt('Change Password', 'Enter your new password:', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Next',
              onPress: (newPass) => {
                setNewPassword(newPass);
                Alert.prompt('Change Password', 'Confirm your new password:', [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'Submit',
                    onPress: (confirmPass) => {
                      setConfirmPassword(confirmPass);
                      if (newPass === confirmPass) {
                        console.log('Password changed');
                        Alert.alert('Change Password', 'Password changed successfully.');
                      } else {
                        Alert.alert('Error', 'Passwords do not match.');
                      }
                    },
                  },
                ]);
              },
            },
          ]);
        },
      },
    ]);
  };

  const handleContactInfoUpdate = () => {
    Alert.prompt('Update Contact Information', 'Enter your current email or phone number:', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Next',
        onPress: (currentContact) => {
          setCurrentContact(currentContact);
          Alert.prompt('Update Contact Information', 'Enter your new email or phone number:', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Submit',
              onPress: (newContact) => {
                setNewContact(newContact);
                console.log('Contact info updated');
                Alert.alert('Contact Information', 'Contact information updated successfully.');
              },
            },
          ]);
        },
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.prompt('Delete Account', 'Enter your old password:', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Submit',
        onPress: (password) => {
          setOldPassword(password);
          console.log('Account deleted');
          Alert.alert('Delete Account', 'Account deleted successfully.');
        },
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Account Settings</Text>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.accountTypeText}>Current Account Type: {accountType}</Text>

        <TouchableOpacity
          style={[styles.button, accountType === 'passenger' && styles.activeButton]}
          onPress={() => switchAccountType('passenger')}
        >
          <Text style={styles.buttonText}>Switch to Passenger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleProfilePictureUpdate}>
          <Text style={styles.buttonText}>Update Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableText} onPress={handleChangePassword}>
          <Text style={styles.touchableTextContent}>Change Password</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Update Contact Information:</Text>
          <TextInput
            style={styles.input}
            value={contactInfo}
            onChangeText={setContactInfo}
            placeholder="Enter new contact info"
          />
          <TouchableOpacity style={styles.button} onPress={handleContactInfoUpdate}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
          <Text style={styles.deleteButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  accountTypeText: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    padding: 12,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  activeButton: {
    backgroundColor: '#1976D2',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  deleteButton: {
    padding: 12,
    backgroundColor: '#f44336',
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  touchableText: {
    marginVertical: 10,
  },
  touchableTextContent: {
    fontSize: 16,
    color: '#2196F3',
    textDecorationLine: 'underline',
  },
  backButton: {
    padding: 12,
    backgroundColor: '#777',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AccountSetting;
