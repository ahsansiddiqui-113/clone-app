import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const PrivacySettings = () => {
  const [allowNotifications, setAllowNotifications] = React.useState(true);
  const [allowLocation, setAllowLocation] = React.useState(false);
  const [allowDataSharing, setAllowDataSharing] = React.useState(true);

  const toggleNotifications = () => setAllowNotifications((prevState) => !prevState);
  const toggleLocation = () => setAllowLocation((prevState) => !prevState);
  const toggleDataSharing = () => setAllowDataSharing((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Privacy Settings</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Duo Security</Text>
        <Switch value={allowNotifications} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable OTP Verification</Text>
        <Switch value={allowNotifications} onValueChange={toggleNotifications} />
      </View>



      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Allow Location Access</Text>
        <Switch value={allowLocation} onValueChange={toggleLocation} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Allow Data Sharing</Text>
        <Switch value={allowDataSharing} onValueChange={toggleDataSharing} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
  },
});

export default PrivacySettings;
