import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/Login';
import RegistrationScreen from './Screens/RegistrationScreen';
import HomePage from './Screens/HomePage';
import ProfileScreen from './Screens/ProfileScreen';
import ExploreScreen from './Screens/ExploreScreen';
import SettingPage from './Screens/Setting';
import AccountSetting from './Screens/AccountSetting';
import PessengerRegistration from './Screens/Passenger/PessengerRegistration';
import PassengerFeatures from './Screens/Passenger/PessengerFeature';
import PrivacySettingsScreen from './Screens/PrivacySetting';
import NotificationSettings from './Screens/Notification';
import HomeDriver from './Screens/HomeDriver';
import BookingConfirmation from './Screens/BookingConfirmation';
import ProposalsScreen from './Screens/ProposalScreen';
import HistoryScreen from './Screens/HistoryScreen';
import StudentRegistration from './Screens/StudentRegistration';
import StudentProfile from './Screens/StudentProfile';
import DriverDashboard from './Screens/DriverDashboard';
import ReportIssue from './Screens/ReportIssue';

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: true }} />
        <Stack.Screen name="Booking" component={BookingConfirmation} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Setting" component={SettingPage} />
        <Stack.Screen name="Account" component={AccountSetting} />
        <Stack.Screen name="Features" component={PassengerFeatures} />
        <Stack.Screen name="Registration" component={PessengerRegistration} />
        <Stack.Screen name="Privacy" component={PrivacySettingsScreen} />
        <Stack.Screen name="Notification" component={NotificationSettings} />
        <Stack.Screen name="Driver" component={HomeDriver} />
        <Stack.Screen name="Proposal" component={ProposalsScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Students" component={StudentRegistration} />
        <Stack.Screen name="StudentProfile" component={StudentProfile} />
        <Stack.Screen name="Dashboard" component={DriverDashboard} />
        <Stack.Screen name="Report" component={ReportIssue} />
      </Stack.Navigator>
  );
};

export default App;
