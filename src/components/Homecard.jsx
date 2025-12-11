import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homecard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('MoreDetail', {
          title: item.name,
          address: item.address,
          footfall: item.footfall, // fixed typo: foorfall → footfall
          images: [item.image],    // wrap in array for Swiper
          price: item.price || 'N/A',
          description: item.description || '',
          location: item.location || '',
        })
      }
    >
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.detail}>
          <View style={styles.infoRow}>
            <View style={styles.leftColumn}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>Address: {item.address}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.price}>Footfall: {item.footfall}M/day</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() =>
                navigation.navigate('ReservePage', {
                  title: item.name,
                  address: item.address,
                  footfall: item.footfall,
                  image: item.image,
                })
              }
            >
              <Text style={styles.buttonText}>Reserve Slot</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() =>
                navigation.navigate('MoreDetail', {
                  title: item.name,
                  address: item.address,
                  footfall: item.footfall,
                  images: [item.image],
                  price: item.price || 'N/A',
                  description: item.description || '',
                  location: item.location || '',
                })
              }
            >
              <Text style={styles.buttonText}>More Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderWidth: 0.3,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  detail: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bookButton: {
    flex: 1,
    paddingVertical: 8,
    marginRight: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButton: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 5,
    backgroundColor: '#6c757d',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Homecard;
