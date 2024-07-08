import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';


const NotificationSettings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [dailyNotifications, setDailyNotifications] = useState(false);
  const [notificationSoundEnabled, setNotificationSoundEnabled] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDailyNotifications = () => setDailyNotifications((prev) => !prev);
  const toggleNotificationSound = () => setNotificationSoundEnabled((prev) => !prev);

  const handleSaveSettings = () => {
    Alert.alert('Settings Saved', 'Notification settings saved successfully.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Notification Settings</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      {notificationsEnabled && (
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Daily Notifications</Text>
          <Switch value={dailyNotifications} onValueChange={toggleDailyNotifications} />
        </View>
      )}

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notification Sound</Text>
        <Switch value={notificationSoundEnabled} onValueChange={toggleNotificationSound} />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveSettings}>
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>
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
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NotificationSettings;
