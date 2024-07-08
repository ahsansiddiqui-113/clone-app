import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000); 
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.jpg')} style={styles.logo} />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, 
    height: 200,
  },
});

export default SplashScreen;
