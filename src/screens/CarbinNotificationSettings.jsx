import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationRow = ({ title, status = 'Off', onEdit }) => (
  <View style={styles.row}>
    <View>
      <Text style={styles.rowTitle}>{title}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
    <TouchableOpacity onPress={onEdit}>
      <Text style={styles.edit}>Edit</Text>
    </TouchableOpacity>
  </View>
);

const CarbinNotificationSettings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Notifications</Text>
        <Text style={styles.tab}>Account</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Section 1 */}
        <Text style={styles.sectionTitle}>Booking and Offers</Text>
        <Text style={styles.sectionDesc}>
          Manage how Carbin updates you with booking alerts and exclusive promotions.
        </Text>

        <NotificationRow title="Booking confirmations" onEdit={() => {}} />
        <NotificationRow title="Offers and discounts" onEdit={() => {}} />

        {/* Section 2 */}
        <Text style={styles.sectionTitle}>Carbin Updates</Text>
        <Text style={styles.sectionDesc}>
          Get the latest on features, improvements, and platform news.
        </Text>

        <NotificationRow title="Product news" onEdit={() => {}} />
        <NotificationRow title="Feedback & support" onEdit={() => {}} />
        <NotificationRow title="Policy and regulations" onEdit={() => {}} />

        {/* Unsubscribe */}
        <Text style={styles.sectionTitle}>Unsubscribe</Text>
        <Text style={styles.sectionDesc}>
          You’ll still receive important security or booking notifications.
        </Text>
        <NotificationRow title="All notifications" onEdit={() => {}} />
      </ScrollView>
    </View>
  );
};

export default CarbinNotificationSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tab: {
    marginRight: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: '#666',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: 'black',
    color: 'black',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  sectionDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  row: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  status: {
    fontSize: 12,
    color: '#666',
  },
  edit: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
  },
});
