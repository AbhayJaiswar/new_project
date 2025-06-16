import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import mainlogo from '../assets/mainlogo.png';
import flagicon from '../assets/Flag_of_India.svg.webp';
export default function Loginshow({ navigation }) {
    const handlePhoneLogin = () => {
        navigation.navigate('Loginuser');
    };
    const handlePhonesignup = () => {
        navigation.navigate('Signup');
    };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Image source={mainlogo} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Let’s you in</Text>

        <View style={styles.socialBtn}>
          <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.icon} />
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </View>
        <View style={styles.socialBtn}>
          <AntDesign name="google" size={24} color="#db4a39" style={styles.icon} />
          <Text style={styles.btnText}>Continue with Google</Text>
        </View>
        <View style={styles.socialBtn}>
          <AntDesign name="apple1" size={24} color="#000" style={styles.icon} />
          <Text style={styles.btnText}>Continue with Apple</Text>
        </View>

        <Text style={styles.or}>or</Text>

        <TouchableOpacity style={styles.phoneBtn} onPress={handlePhoneLogin}>
            <Text style={styles.phoneBtnText}>Sign in with Phone Number</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don’t have an account?{' '}
          <Text style={styles.signUp} onPress={handlePhonesignup}>
            Sign up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  innerContainer: { alignItems: 'center', padding: 20 },
  image: { width: 350, height: 300 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 30 },
  socialBtn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  icon: { marginRight: 15 },
  btnText: { fontSize: 16, fontWeight: '500' },
  or: { marginVertical: 20, fontSize: 16, color: '#999' },
  phoneBtn: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  phoneBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  footerText: { color: '#555', fontSize: 14 },
  signUp: { color: '#FF6347', fontWeight: '600' },
});
