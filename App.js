import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './pages/Home';
import NearMe from './pages/FoodShow';
import Chat from './pages/ViewOrder';
import LoginScreen from './pages/showloginoption';
import SplashScreen from './pages/SplashScreen';
import SignupScreen from './pages/SignupScreen';
import LogingPageuser from './pages/LoginScreen';

// Dummy Profile screen
const Profile = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>Profile Page</Text>
  </View>
);

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={({ state, navigation }) => (
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          {/* Home Tab */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons
              name="home"
              size={24}
              color={state.index === 0 ? '#FF6347' : '#999'}
            />
            <Text style={[styles.navText, { color: state.index === 0 ? '#FF6347' : '#999' }]}>
              Home
            </Text>
          </TouchableOpacity>

          {/* Order Tab */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Order')}
          >
            <Ionicons
              name="receipt"
              size={24}
              color={state.index === 1 ? '#FF6347' : '#999'}
            />
            <Text style={[styles.navText, { color: state.index === 1 ? '#FF6347' : '#999' }]}>
              Order
            </Text>
          </TouchableOpacity>

          {/* Cart Button */}
          <TouchableOpacity style={[styles.navItem, styles.cartButton]}>
            <Ionicons name="cart" size={24} color="white" />
          </TouchableOpacity>

          {/* Chat Tab */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Chat')}
          >
            <Ionicons
              name="chatbubble"
              size={24}
              color={state.index === 2 ? '#FF6347' : '#999'}
            />
            <Text style={[styles.navText, { color: state.index === 2 ? '#FF6347' : '#999' }]}>
              Chat
            </Text>
          </TouchableOpacity>

          {/* Profile Tab */}
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <Ionicons
              name="person"
              size={24}
              color={state.index === 3 ? '#FF6347' : '#999'}
            />
            <Text style={[styles.navText, { color: state.index === 3 ? '#FF6347' : '#999' }]}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomSpacer} />
      </View>
    )}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Order" component={NearMe} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

// Main App Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Loginuser" component={LogingPageuser} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartButton: {
    backgroundColor: '#FF6347',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
  bottomSpacer: {
    height: 35,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#333',
  },
});
