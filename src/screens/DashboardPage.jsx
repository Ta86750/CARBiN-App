import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import Bottomnav from './BottomNav';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const upcomingSlots = [
  { id: '1', location: 'MG Road Metro', date: 'April 18', time: '3:00 PM - 6:00 PM', uploaded: false },
  { id: '2', location: 'Indira Mall', date: 'April 20', time: '1:00 PM - 3:00 PM', uploaded: true },
  { id: '3', location: 'Sea Mall', date: 'April 22', time: '4:00 PM - 7:00 PM', uploaded: true },
];

const pastSlots = [
  { id: '4', location: 'Brigade Road', date: 'March 12', time: '2:00 PM - 5:00 PM', status: 'Completed' },
  { id: '5', location: 'Airport Terminal', date: 'Feb 25', time: '12:00 PM - 2:00 PM', status: 'Cancelled' },
];

export default function DashboardPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [mediaSelected, setMediaSelected] = useState(false);

  const handleUploadClick = (slot) => {
    setSelectedSlot(slot);
    setMediaSelected(false);
    setModalVisible(true);
  };

  const handleMockMediaPick = () => {
    setMediaSelected(true);
  };

  const handleUploadConfirm = () => {
    setModalVisible(false);
    Alert.alert('Success', 'Media uploaded successfully!');
  };

  const renderSlotCard = (item, isUpcoming = true) => (
    <View style={styles.card} key={item.id}>
      <View style={styles.cardHeader}>
        <MaterialIcons name="location-pin" size={20} color="#1E3A8A" />
        <Text style={styles.cardTitle}>{item.location}</Text>
      </View>

      <View style={styles.cardRow}>
        <MaterialIcons name="event" size={18} color="#555" />
        <Text style={styles.cardText}>{item.date}, {item.time}</Text>
      </View>

      {isUpcoming ? (
        <>
          <View style={styles.cardRow}>
            <MaterialIcons name="insert-photo" size={18} color="#555" />
            <Text style={styles.cardText}>
              Media: {item.uploaded ? 'Uploaded' : 'Pending'}
            </Text>
          </View>
          {!item.uploaded && (
            <TouchableOpacity
              style={styles.uploadBtn}
              onPress={() => handleUploadClick(item)}
              activeOpacity={0.85}
            >
              <MaterialIcons name="cloud-upload" size={18} color="#fff" />
              <Text style={styles.uploadBtnText}>Upload Media</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View style={styles.cardRow}>
          <MaterialIcons
            name={item.status === 'Completed' ? 'check-circle' : 'cancel'}
            size={18}
            color={item.status === 'Completed' ? '#16A34A' : '#DC2626'}
          />
          <Text
            style={[
              styles.cardText,
              { color: item.status === 'Completed' ? '#16A34A' : '#DC2626' },
            ]}
          >
            {item.status}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header + Stats */}
      <View style={styles.fixedHeader}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <FontAwesome5 name="bullhorn" size={22} color="#1E3A8A" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.headerTitle}>Ad Dashboard</Text>
              <Text style={styles.headerSubtitle}>Manage your campaigns</Text>
            </View>
          </View>
          
        </View>

        {/* Stats */}
        <View style={styles.summaryBox}>
          <View style={[styles.summaryItem]}>
            <FontAwesome5 name="bullhorn" size={20} color="#1E3A8A" />
            <Text style={styles.summaryValue}>14</Text>
            <Text style={styles.summaryLabel}>Total Ads</Text>
          </View>
          <View style={[styles.summaryItem]}>
            <MaterialIcons name="play-circle-outline" size={22} color="#1E3A8A" />
            <Text style={styles.summaryValue}>3</Text>
            <Text style={styles.summaryLabel}>Active</Text>
          </View>
          <View style={[styles.summaryItem]}>
            <MaterialIcons name="hourglass-empty" size={22} color="#1E3A8A" />
            <Text style={styles.summaryValue}>2</Text>
            <Text style={styles.summaryLabel}>Pending</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Upcoming */}
        <Text style={styles.sectionTitle}>Upcoming Ads</Text>
        {upcomingSlots.length > 0 ? (
          upcomingSlots.map((item) => renderSlotCard(item))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No upcoming ads scheduled</Text>
          </View>
        )}

        {/* History */}
        <Text style={styles.sectionTitle}>Ad History</Text>
        {pastSlots.length > 0 ? (
          pastSlots.map((item) => renderSlotCard(item, false))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No past ad history</Text>
          </View>
        )}
      </ScrollView>

      {/* Upload Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Upload Media</Text>
            <Text style={styles.modalLocation}>{selectedSlot?.location}</Text>
            <Text style={styles.modalDateTime}>
              {selectedSlot?.date} • {selectedSlot?.time}
            </Text>

            <TouchableOpacity
              style={styles.mediaPickerBox}
              onPress={handleMockMediaPick}
              activeOpacity={0.7}
            >
              {mediaSelected ? (
                <>
                  <MaterialIcons name="check-circle" size={40} color="#16A34A" />
                  <Text style={styles.placeholderText}>Media Selected</Text>
                </>
              ) : (
                <>
                  <MaterialIcons name="cloud-upload" size={40} color="#9CA3AF" />
                  <Text style={styles.placeholderText}>Tap to select media</Text>
                </>
              )}
            </TouchableOpacity>

            <View style={styles.modalButtons}>
              {mediaSelected && (
                <TouchableOpacity
                  style={[styles.modalButton, styles.uploadButton]}
                  onPress={handleUploadConfirm}
                >
                  <Text style={[styles.modalButtonText, { color: '#fff' }]}>
                    Confirm Upload
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Bottomnav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F9FAFB' },

  // Fixed Header Wrapper
  fixedHeader: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
  },

  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#111' },
  headerSubtitle: { fontSize: 13, color: '#6B7280' },
  avatarBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1E3A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Stats
  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  summaryItem: {
    flex: 1,
    margin: 6,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
    color: '#1E3A8A',
  },
  summaryLabel: { fontSize: 13, color: '#6B7280', marginTop: 2 },

  // Cards
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 14,
    color: '#111',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cardTitle: { fontWeight: '600', fontSize: 16, marginLeft: 6, color: '#111' },
  cardRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  cardText: { marginLeft: 6, fontSize: 14, color: '#374151' },
  uploadBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3A8A',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  uploadBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', padding: 30 },
  emptyText: { textAlign: 'center', marginTop: 10, color: '#9CA3AF', fontSize: 15 },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 18,
    width: width * 0.9,
    maxWidth: 400,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
    color: '#111',
    textAlign: 'center',
  },
  modalLocation: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#374151',
  },
  modalDateTime: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 16,
  },
  mediaPickerBox: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  placeholderText: { marginTop: 10, color: '#6B7280', fontSize: 15 },
  modalButtons: { marginTop: 12 },
  modalButton: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButton: { backgroundColor: '#1E3A8A' },
  cancelButton: { backgroundColor: '#DC2626' },
  modalButtonText: { fontWeight: '600', fontSize: 16 },
});
