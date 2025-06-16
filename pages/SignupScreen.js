import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,

} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import flagicon from '../assets/Flag_of_India.svg.webp';
import mainlogo from '../assets/mainlogo.png';



export default function SignupScreen({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={mainlogo} // Replace with your logo
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Create New Account</Text>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Image source={flagicon} style={styles.flag} />
        <TextInput
          placeholder="+91 7262917020"
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      </View>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#999" style={styles.icon} />
        <TextInput placeholder="Full Name" style={styles.input} />
      </View>


      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      {/* OR Line */}
      <Text style={styles.orText}>or continue with</Text>

      {/* Social Logins */}
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

      {/* Bottom Sign in */}
      <Text style={styles.bottomText}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
          Sign in
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
    // paddingTop: 60,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: -10,
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
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: 5,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  rememberMeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 15,
  },
  signupText: {
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
  signInLink: {
    color: '#00C853',
    fontWeight: 'bold',
  },
});
