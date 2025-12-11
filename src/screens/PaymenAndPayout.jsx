import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PaymenAndPayout({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Payments & Payouts</Text>
        <Text style={styles.currency}>₹-INR</Text>
      </View>

      {/* Travelling Section */}
      <Text style={styles.sectionTitle}>Traveling</Text>
      <MenuItem icon="card-outline" label="Payment methods" />
      <MenuItem icon="list-outline" label="Your carbon credits" />
      <MenuItem icon="pricetag-outline" label="Reward coupons" />

      {/* Divider */}
      <View style={styles.divider} />

      {/* Hosting/Partners Section */}
      <Text style={styles.sectionTitle}>Partnering</Text>
      <MenuItem icon="cash-outline" label="Payout methods" />
      <MenuItem icon="receipt-outline" label="Transaction history" />
      <MenuItem icon="heart-outline" label="Donate your earnings" />
    </ScrollView>
  );
}

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.item}>
    <Ionicons name={icon} size={22} />
    <Text style={styles.itemText}>{label}</Text>
    <Ionicons name="chevron-forward" size={20} color="#555" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
  currency: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    color: '#000',
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
