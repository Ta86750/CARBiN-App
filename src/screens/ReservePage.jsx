import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const mockData = [
  { time: '06:00 - 07:00 AM' },
  { time: '07:00 - 08:00 AM' },
  { time: '08:00 - 09:00 AM' },
  { time: '09:00 - 10:00 AM' },
  { time: '10:00 - 11:00 AM' },
  { time: '11:00 - 12:00 PM' },
  { time: '12:00 - 01:00 PM' },
  { time: '01:00 - 02:00 PM' },
  { time: '02:00 - 03:00 PM' },
  { time: '03:00 - 04:00 PM' },
  { time: '04:00 - 05:00 PM' },
  { time: '05:00 - 06:00 PM' },
  { time: '06:00 - 07:00 PM' },
  { time: '07:00 - 08:00 PM' },
  { time: '08:00 - 09:00 PM' },
];

const ReservePage = ({ navigation, route }) => {
  const params = route?.params ?? {};
  const { title = 'Ad Slot', price = 'N/A', footfall = 'N/A' } = params;

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) setSelectedDate(date);
  };

  const handleTimeSlotPress = (timeSlot) => {
    setSelectedTime(timeSlot);
    navigation.navigate('NoOfSlot', {
      selectedTime: timeSlot,
      selectedDate: selectedDate.toDateString(),
      title,
      pricePerSlot: price,
    });
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.headerCard}>
        <Text style={styles.pageTitle}>{title}</Text>
        <View style={styles.infoRow}>
          <MaterialIcons name="attach-money" size={18} color="#2563EB" />
          <Text style={styles.subInfo}>
            Price per slot: <Text style={styles.highlight}>{price}</Text>
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="walk-outline" size={18} color="#2563EB" />
          <Text style={styles.subInfo}>
            Estimated Footfall: <Text style={styles.highlight}>{footfall}</Text>
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Date Picker */}
        <Text style={styles.sectionTitle}>Select Date</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Ionicons name="calendar-outline" size={20} color="#2563EB" />
          <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            minimumDate={today}
            maximumDate={new Date(today.getTime() + 7 * 86400000)}
            onChange={handleDateChange}
          />
        )}

        {/* Time Slots */}
        <Text style={styles.sectionTitle}>Available Time Slots</Text>
        <View style={styles.slotGrid}>
          {mockData.map((item, index) => {
            const isSelected = selectedTime === item.time;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.slotCard, isSelected && styles.slotCardSelected]}
                onPress={() => handleTimeSlotPress(item.time)}
              >
                <Ionicons
                  name="time-outline"
                  size={18}
                  color={isSelected ? '#fff' : '#2563EB'}
                  style={{ marginBottom: 6 }}
                />
                <Text
                  style={[styles.slotTime, isSelected && styles.slotTimeSelected]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
  },
  scrollContent: {
    padding: 18,
    paddingBottom: 120,
  },
  headerCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    margin: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 6,
    borderLeftColor: '#2563EB',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1E3A8A',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  subInfo: {
    fontSize: 15,
    marginLeft: 6,
    color: '#444',
  },
  highlight: {
    color: '#2563EB',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 14,
    color: '#111827',
  },
  dateButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  dateText: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '600',
    marginLeft: 8,
  },
  // Time Slots
  slotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  slotCard: {
    width: width / 2.3, // fits 2 per row
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  slotCardSelected: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
    shadowOpacity: 0.15,
  },
  slotTime: {
    fontSize: width < 360 ? 13 : 15,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
  slotTimeSelected: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ReservePage;
