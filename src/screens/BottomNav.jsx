import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Bottomnav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={styles.navButton} 
        onPress={() => navigation.navigate('HomePage')}
      >
        <Ionicons name="home-outline" size={26} color="black" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navButton} 
        onPress={() => navigation.navigate('DashboardPage')}
      >
        <MaterialIcons name="dashboard" size={26} color="black" />
        <Text style={styles.label}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.navButton} 
        onPress={() => navigation.navigate('SettingPage')}
      >
        <Ionicons name="person-outline" size={26} color="black" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    height: 60,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 2,
    color: '#333',
  },
});

export default Bottomnav;
