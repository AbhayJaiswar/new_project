import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RestaurantDetails = () => {
  // Restaurant data
  const restaurant = {
    name: 'Bottega Ristorante',
    description: 'Italian Resto',
    location: 'Fairgrounds, SCBD, Jakarta',
    rating: 4.8,
    reviews: 99,
    menuCount: 6,
    priceRange: '49-990rb',
    hours: '8AM-8PM',
    distance: '4.6KM',
    deliveryFee: '12rb',
    deliveryTime: '15 min',
    discounts: [
      { text: 'F&B discount 75%', icon: 'pricetag' },
      { text: 'Shipping discount 50%', icon: 'car' },
    ],
  };

  // Menu categories
  const categories = ['Popular', 'Main Courses', 'Appetizer', 'Pizza & Pas'];

  // Menu items under "Popular" category
  const menuItems = [
    {
      id: '1',
      name: "Bottega's Fried Rice",
      price: 'Rp98,000',
      imageUri: 'https://static.toiimg.com/thumb/imgsize-276736,msid-87282159/87282159.jpg?width=500&resizemode=4',
      tags: ['Extra discount'],
    },
    {
      id: '2',
      name: 'Salmon with Beaurre',
      price: 'Rp320,000',
      imageUri: 'https://static.toiimg.com/thumb/imgsize-276736,msid-87282159/87282159.jpg?width=500&resizemode=4',
      tags: [],
    },
    {
      id: '3',
      name: 'Salmon with Beaurre',
      price: 'Rp320,000',
      imageUri: 'https://static.toiimg.com/thumb/imgsize-276736,msid-87282159/87282159.jpg?width=500&resizemode=4',
      tags: [],
    },
    {
      id: '4',
      name: 'Salmon with Beaurre',
      price: 'Rp320,000',
      imageUri: 'https://static.toiimg.com/thumb/imgsize-276736,msid-87282159/87282159.jpg?width=500&resizemode=4',
      tags: [],
    },
    {
      id: '5',
      name: 'Salmon with Beaurre',
      price: 'Rp320,000',
      imageUri: 'https://static.toiimg.com/thumb/imgsize-276736,msid-87282159/87282159.jpg?width=500&resizemode=4',
      tags: [],
    },
  ];

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image
        source={{ uri: item.imageUri }}
        style={styles.menuImage}
        resizeMode="cover"
      />
      <View style={styles.menuContent}>
        {item.tags.length > 0 && (
          <View style={styles.tags}>
            {item.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
        )}
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.favoriteIcon}>
        <Ionicons name="heart-outline" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Background Image */}
        <ImageBackground
          source={{ uri: 'https://static.toiimg.com/thumb/imgsize-276736,msid-87282159/87282159.jpg?width=500&resizemode=4' }}
          style={styles.headerImage}
        >
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.rightIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="search" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Restaurant Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.description}>{restaurant.description}</Text>
          <Text style={styles.location}>{restaurant.location}</Text>
          <TouchableOpacity>
            <Text style={styles.mapLink}>See on maps</Text>
          </TouchableOpacity>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{restaurant.rating}</Text>
              <Text style={styles.statLabel}>{restaurant.reviews} Reviews</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{restaurant.menuCount}</Text>
              <Text style={styles.statLabel}>Menu variants</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{restaurant.priceRange}</Text>
              <Text style={styles.statLabel}>Price range</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{restaurant.hours}</Text>
              <Text style={styles.statLabel}>Opening hours</Text>
            </View>
          </View>

          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryText}>
              {restaurant.distance} distance • Est. delivery fee {restaurant.deliveryFee} • Delivery in {restaurant.deliveryTime}
            </Text>
            <TouchableOpacity>
              <Text style={styles.changeLocation}>Change location</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discountRow}>
            {restaurant.discounts.map((discount, index) => (
              <View key={index} style={styles.discountTag}>
                <Ionicons name={discount.icon} size={16} color="#e91e63" />
                <Text style={styles.discountText}>{discount.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Category Tabs */}
        <View style={styles.categoryTabs}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryTab,
                category === 'Popular' && styles.activeCategoryTab,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === 'Popular' && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu Items */}
        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <View key={item.id}>{renderMenuItem({ item })}</View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 40,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  infoContainer: {
    padding: 15,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  mapLink: {
    fontSize: 14,
    color: '#e91e63',
    marginTop: 5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  deliveryInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  deliveryText: {
    fontSize: 14,
    color: '#666',
  },
  changeLocation: {
    fontSize: 14,
    color: '#e91e63',
  },
  discountRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
  discountTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe6f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
  discountText: {
    fontSize: 12,
    color: '#e91e63',
    marginLeft: 5,
  },
  categoryTabs: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  activeCategoryTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#e91e63',
  },
  categoryText: {
    fontSize: 16,
    color: '#666',
  },
  activeCategoryText: {
    color: '#e91e63',
    fontWeight: 'bold',
  },
  menuList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  menuContent: {
    flex: 1,
    paddingLeft: 10,
  },
  tags: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tag: {
    fontSize: 12,
    color: '#333',
    backgroundColor: '#f0f0f0',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginRight: 5,
  },
  menuName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuPrice: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#e91e63',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    fontSize: 14,
    color: '#e91e63',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default RestaurantDetails;