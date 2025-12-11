import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '@env';
import {
  View, Text, TextInput, FlatList,
  TouchableOpacity, StyleSheet, SafeAreaView,
  KeyboardAvoidingView, Platform, Dimensions, Image, ActivityIndicator, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardComponent from '../components/Homecard';
import Bottomnav from './BottomNav';

const { width, height } = Dimensions.get('window');
const isTablet = width > 768;

const filters = [
  { icon: 'people-outline', label: 'All' },
  { icon: 'location-outline', label: 'Near me' },
  { icon: 'train-outline', label: 'Metro' },
  { icon: 'briefcase-outline', label: 'Mall' },
  { icon: 'star-outline', label: 'Popular' },
  { icon: 'walk-outline', label: 'High Footfall' },
  { icon: 'bar-chart-outline', label: 'Engagement' },
  { icon: 'pricetag-outline', label: 'Low Price' },
  { icon: 'train-outline', label: 'Railway Station' },
  { icon: 'image-outline', label: 'Video/image' },
];

const HomePage = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trim the env value to avoid accidental whitespace from .env formatting
    const base = (API_BASE_URL || '').toString().trim();
    const url = `${base}`;
    console.log('DEBUG: API_BASE_URL (raw):', API_BASE_URL);
    console.log('DEBUG: using URL:', url);

    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(async res => {
        const text = await res.text();
        console.log('DEBUG: locations response status:', res.status);
        console.log('DEBUG: locations response body (raw):', text);
        let data;
        try { data = JSON.parse(text); } catch (e) { data = text; }
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} - ${JSON.stringify(data)}`);
        }
        return data;
      })
      .then(data => {
        // Normalize API response: some APIs return { locations: [...] } or an array directly
        console.log('locations fetch result:', data);
        if (Array.isArray(data)) {
          setLocations(data);
        } else if (data && Array.isArray(data.locations)) {
          setLocations(data.locations);
        } else {
          // fallback to empty array to avoid runtime errors
          setLocations([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('fetch /locations failed:', err);
        setLoading(false);
      });
  }, []);

  // Guard against unexpected shapes (locations might be undefined or an object)
  const filteredData = Array.isArray(locations)
    ? locations.filter(item =>
        (item && item.name && item.name.toString().toLowerCase().includes(searchText.toLowerCase()))
      )
    : [];

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {/* Fixed Header + Filters */}
          <View style={styles.fixedTop}>
            {/* Header */}
            <View style={styles.header}>
              <Image source={require('../assets/carbinLogo.png')} style={styles.logo} />
              <View style={styles.inlineSearchContainer}>
                <Icon name="search" size={18} color="#888" style={styles.searchIcon} />
                <TextInput
                  placeholder="Search location, metro, mall..."
                  placeholderTextColor="#888"
                  style={styles.inlineSearchInput}
                  value={searchText}
                  onChangeText={setSearchText}
                  returnKeyType="search"
                />
              </View>
            </View>

            {/* Filters */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filterScroll}
              contentContainerStyle={styles.filterContent}
            >
              {filters.map((filter, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.filter,
                    selectedFilter === filter.label && styles.selectedFilter,
                  ]}
                  onPress={() => setSelectedFilter(filter.label)}
                >
                  <Ionicons
                    name={filter.icon}
                    size={isTablet ? 30 : 22}
                    color={selectedFilter === filter.label ? 'blue' : 'black'}
                  />
                  <Text
                    style={[
                      styles.filterText,
                      selectedFilter === filter.label && { color: 'blue', fontWeight: 'bold' },
                    ]}
                  >
                    {filter.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Scrollable Cards Section */}
          <FlatList
            data={loading ? [] : filteredData}
            keyExtractor={(item, index) => item.location_id || index.toString()}
            numColumns={isTablet ? 2 : 1}
            columnWrapperStyle={isTablet ? { justifyContent: 'space-between' } : null}
            contentContainerStyle={{ paddingHorizontal: width * 0.05, paddingBottom: 100 }}
            ListEmptyComponent={() =>
              loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                  <ActivityIndicator size="large" color="blue" />
                  <Text style={{ marginTop: 10, fontSize: 16, color: '#333' }}>Loading cards...</Text>
                </View>
              ) : (
                <View style={{ alignItems: 'center', marginTop: 50 }}>
                  <Text style={{ fontSize: 16, color: '#666' }}>No data found</Text>
                </View>
              )
            }
            renderItem={({ item }) => (
              <View style={{ flex: 1, marginHorizontal: isTablet ? 5 : 0, marginBottom: 20 }}>
                <CardComponent item={item} navigation={navigation} />
              </View>
            )}
          />
        </KeyboardAvoidingView>

        {/* Bottom Navigation */}
        <Bottomnav />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedTop: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    marginBottom: 10,
  },
  logo: {
    width: 90,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  inlineSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#ccc',
    height: height * 0.055,
  },
  inlineSearchInput: {
    flex: 1,
    fontSize: isTablet ? 16 : 14,
    color: 'black',
    paddingLeft: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  filterScroll: {
    paddingLeft: width * 0.05,
  },
  filterContent: {
    paddingRight: width * 0.05,
  },
  filter: {
    width: width * 0.18,
    height: width * 0.18,
    backgroundColor: '#f2f2f2',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedFilter: {
    backgroundColor: '#d0e8ff',
  },
  filterText: {
    fontSize: isTablet ? 12 : 10,
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
  },
});

export default HomePage;
