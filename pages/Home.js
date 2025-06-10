import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Swiper from 'react-native-swiper';

export default function App() {
     const menuItems = [
    {
      id: '1',
      name: "Bottegea's Fried Rice",
      price: 'Rp98,000',
      imageUri: 'https://via.placeholder.com/150',
      tags: ['extra discount'],
    },
    {
      id: '2',
      name: 'Salmon with Beaurre',
      price: 'Rp320,000',
      imageUri: 'https://via.placeholder.com/150',
      tags: [],
    },
    {
      id: '3',
      name: 'Calamari',
      price: 'Rp129,500',
      imageUri: 'https://via.placeholder.com/150',
      tags: [],
    },
    {
      id: '4',
      name: 'Chicken Parmigiana',
      price: 'Rp198,000',
      imageUri: 'https://via.placeholder.com/150',
      tags: [],
    },
  ];

    const categories = [
    {
      id: 1,
      title: 'Customer Top Picks',
      restaurantCount: '321 Restaurant Already',
      backgroundColor: '#FFA500',
    },
    {
      id: 2,
      title: 'Beverages',
      restaurantCount: '189 Restaurant Already',
      backgroundColor: '#FF4500',
    },
    {
      id: 3,
      title: 'Fast Food',
      restaurantCount: '526 Restaurant Already',
      backgroundColor: '#1E90FF',
    },
    {
      id: 4,
      title: 'Desserts',
      restaurantCount: '891 Restaurant Already',
      backgroundColor: '#00BFFF',
    },
    {
      id: 5,
      title: 'Desserts',
      restaurantCount: '891 Restaurant Already',
      backgroundColor: '#00BFFF',
    },
    {
      id: 6,
      title: 'Desserts',
      restaurantCount: '891 Restaurant Already',
      backgroundColor: '#00BFFF',
    },
  ];
    const banners = [
    {
      id: 1,
      imageUri: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg',
    //   text: "TODAY'S BEST",
    //   discount: 'Off up to 75%',
    },
    {
      id: 2,
      imageUri: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg', 
    //   text: 'WEEKLY BEST',
    //   discount: 'Off up to 50%',
    },
    {
      id: 3,
      imageUri: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg', 
    //   text: 'WEEKLY BEST',
    //   discount: 'Off up to 50%',
    },
    {
        id: 4,
      imageUri: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg',

    }
    // Add more banners as needed
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBarSpacer} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.location}>
            <Text style={styles.locationText}>YOUR CURRENT ADDRESS</Text>
            <Text style={styles.address}>Gunamawan Street No. 14</Text>
          </View>
          <View style={styles.headerIcons}>
            <Ionicons name="heart-outline" size={24} color="white" style={styles.icon} />
            <Ionicons name="notifications-outline" size={24} color="white" style={styles.icon} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="What would you like to eat?"
            placeholderTextColor="#999"
          />
        </View>

        {/* Promotional Banners */}
          <View style={styles.banners}>
            <Swiper
                style={styles.wrapper}
                autoplay
                autoplayTimeout={3} // Auto-scroll every 3 seconds
                showsPagination={true}
                paginationStyle={styles.pagination}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
            >
                {banners.map((banner) => (
                <View key={banner.id} style={styles.banner}>
                    {banner.imageUri && (
                    <Image
                        source={{ uri: banner.imageUri }}
                        style={styles.bannerImage}
                    />
                    )}
                    
                </View>
                ))}
            </Swiper>
        </View>
        
        {/* Wallet and Coins */}
        <View style={styles.walletContainer}>
          <View style={styles.walletCard}>
            <Ionicons name="wallet-outline" size={24} color="#FF6347" />
            <Text style={styles.walletText}>YOUR WALLET</Text>
            <Text style={styles.walletAmount}>Rp699.000</Text>
          </View>
          <View style={styles.walletCard}>
            <Ionicons name="ellipse" size={24} color="#FF6347" />
            <Text style={styles.walletText}>YOUR COINS</Text>
            <Text style={styles.walletAmount}>1,200</Text>
          </View>
        </View>

        {/* Quick Filters */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="location-outline" size={20} color="#FF6347" />
            <Text style={styles.filterText}>Near Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="star-outline" size={20} color="#FF6347" />
            <Text style={styles.filterText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="pricetag-outline" size={20} color="#FF6347" />
            <Text style={styles.filterText}>Discount</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="time-outline" size={20} color="#FF6347" />
            <Text style={styles.filterText}>24 Hours</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="flash-outline" size={20} color="#FF6347" />
            <Text style={styles.filterText}>QUICK!!!</Text>
          </TouchableOpacity>
        </View>

        {/* Daily Dishes Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Daily Dishes</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {/* Category Cards */}
          <View style={styles.categories}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[styles.categoryCard, { backgroundColor: category.backgroundColor }]}
        >
          <Text style={styles.categoryText}>{category.title}</Text>
          <Text style={styles.restaurantCount}>{category.restaurantCount}</Text>
        </TouchableOpacity>

      ))}
    </View>
      </ScrollView>
            
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarSpacer: {
    height: Constants.statusBarHeight,
    backgroundColor: '#FF6347',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#FF6347',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    flex: 1,
  },
  locationText: {
    color: 'white',
    fontSize: 12,
  },
  address: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  searchContainer: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 30,
    paddingLeft: 10,
    backgroundColor: '#FF6347',
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
  banners: {
    width: '100%',
    height: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  banner: {
    width: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 170,
    borderRadius: 10,
  },
  
  bannerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bannerDiscount: {
    fontSize: 14,
    color: '#FF4500',
  },
  walletContainer: {
    marginTop: -30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  walletCard: {
    width: '48%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  walletText: {
    fontSize: 12,
    marginVertical: 5,
  },
  walletAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  filterButton: {
    alignItems: 'center',
  },
  filterText: {
    fontSize: 12,
    marginTop: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#FF6347',
  },
  categories: {
    flexDirection: 'row', // Use row to align items horizontally
    justifyContent: 'space-between',
    padding: 15,
    flexWrap: 'wrap', // Allow wrapping to next row for two cards per row
  },
  categoryCard: {
    width: '47%', // Slightly less than 50% to account for spacing
    backgroundColor: '#FFD700', // Default background, overridden by dynamic color
    borderRadius: 10,
    padding: 15,
    // alignItems: 'center',
    marginBottom: 15, // Space between rows
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  restaurantCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  
  bottomNavContainer: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
  cartButton: {
    backgroundColor: '#FF6347',
    borderRadius: 50,
    padding: 10,
  },
  bottomSpacer: {
    height: Platform.OS === 'ios' ? 20 : 10,
    backgroundColor: 'white',
    // borderTopWidth: 1,
    marginBottom: 30,
  },
});