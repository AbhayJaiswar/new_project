// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import mainlogo from '../assets/mainlogo.png'; 

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to login after 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={mainlogo} // Replace with your actual logo
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#34C759" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 380,
    height: 380,
  },
  loader: {
    marginTop: 40,
  },
});
