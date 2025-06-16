import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import mainlogo from '../assets/mainlogo.png';
import flagicon from '../assets/Flag_of_India.svg.webp';


export default function LoginScreen({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const redirectToHome = () => {
    navigation.navigate('MainTabs');
  }

  return (
    <View style={styles.container}>
      <Image
        source={mainlogo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login to Your Account</Text>
      <View style={styles.inputContainer}>
        <Image source={flagicon} style={styles.flag} />
        <TextInput
          style={styles.input}
          placeholder="+91 7262917020"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}  onPress={redirectToHome}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or continue with</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>
        Don’t have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('Signup')}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    paddingTop: 60,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 15,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#888',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    backgroundColor: '#f3f3f3',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  bottomText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
  signupLink: {
    color: '#00C853',
    fontWeight: 'bold',
  },
});
