import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity,ScrollView, StyleSheet } from 'react-native';

const filters = ['Filter', 'Discount', 'Promo', 'Recommended','Filter', 'Discount', 'Promo', 'Recommended'];
const restaurants = [
  {
    id: '1',
    name: 'Bottega Ristorante',
    description: 'Italian restaurant with various dishes',
    rating: 4.6,
    reviews: 456,
    price: '49rb',
    distance: '4.6KM',
    deliveryTime: '15 min',
    imageUri: 'https://static.toiimg.com/thumb/imgsize-276736,msid-87282159/87282159.jpg?width=500&resizemode=4',
    tags: ['Extra discount', 'Free delivery'],
  },
  {
    id: '2',
    name: 'SOULFOOD Jakarta',
    description: 'Indonesian comfort eats served...',
    rating: 4.7,
    reviews: 134,
    price: '35rb',
    distance: '2.2KM',
    deliveryTime: '10 min',
    imageUri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
    tags: ['Extra discount'],
  },
  {
    id: '3',
    name: 'Greyhound Cafe',
    description: 'Hip, industrial-style eatery with...',
    rating: 4.2,
    price: '39rb',
    reviews: 354,
    distance: '2.6KM',
    deliveryTime: '10 min',
    imageUri: 'https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg',
    tags: ['Free delivery'],
  },
  {
    id: '4',
    name: 'Le Quartier',
    description: 'Classic French-influenced brasserie...',
    rating: 4.6,
    reviews: 654,
    price: '79rb',
    distance: '5.4KM',
    deliveryTime: '15 min',
    imageUri: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Quick-dinner-recipes-c7ca11c.jpg?quality=90&resize=556,505',
    tags: ['Extra discount', 'Free delivery'],
  },
  {
    id: '5',
    name: 'Le Quartier',
    description: 'Classic French-influenced brasserie...',
    rating: 4.6,
    reviews: 654,
    price: '79rb',
    distance: '5.4KM',
    deliveryTime: '15 min',
    imageUri: 'https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
    tags: ['Extra discount', 'Free delivery'],
  },
  {
    id: '6',
    name: 'Le Quartier',
    description: 'Classic French-influenced brasserie...',
    rating: 4.6,
    reviews: 654,
    price: '79rb',
    distance: '5.4KM',
    deliveryTime: '15 min',
    imageUri: 'https://c.ndtvimg.com/2022-03/jcliv9dg_shahi-paneer_625x300_15_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
    tags: ['Extra discount', 'Free delivery'],
  },
];

const NearMeSection = () => {
  const renderRestaurantCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: item.imageUri }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <View style={styles.ratingRow}>
          <Text style={styles.ratingText}>{item.rating} ★ ({item.reviews})</Text>
          <TouchableOpacity>
            <Text style={styles.favorite}>♡</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.details}>
          Start from {item.price} • {item.distance} Distance • Delivery in {item.deliveryTime}
        </Text>
        <View style={styles.tags}>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Dishes near me</Text>
      <Text style={styles.subHeader}>Catch delicious eats near you</Text>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filters.map((label, index) => (
          <TouchableOpacity key={index} style={styles.filterButton}>
            <Text style={styles.filterText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>

      {/* Restaurant List */}
      <FlatList
        data={restaurants}
        renderItem={renderRestaurantCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    padding: 10,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: {
    width: 120,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
  },
  favorite: {
    fontSize: 20,
    color: '#666',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  details: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
});

export default NearMeSection;