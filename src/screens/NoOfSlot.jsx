import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Platform,
  useWindowDimensions,
  Modal,
} from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const NoOfSlot = ({ navigation, route }) => {
  const { width } = useWindowDimensions();

  const {
    selectedTime = 'N/A',
    selectedDate = 'N/A',
    title = 'Ad Slot Title',
    pricePerSlot = 1000,
  } = route.params || {};

  const reservedSlots = 15;
  const availableSlots = 10;
  const maxSlots = 60;

  const [slotCount, setSlotCount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [mediaSelected, setMediaSelected] = useState(null);

  const totalAmount = slotCount ? parseInt(slotCount) * pricePerSlot : 0;

  const handleReserve = () => {
    if (!slotCount || isNaN(slotCount) || parseInt(slotCount) <= 0) {
      Alert.alert(
        'Invalid Input',
        'Please enter a valid number of slots (minimum 1).'
      );
      return;
    }

    const numSlots = parseInt(slotCount);
    if (numSlots > availableSlots) {
      Alert.alert('Not Enough Slots', `Only ${availableSlots} slots are available.`);
      return;
    }

    // Open media upload modal after reservation confirmation
    setModalVisible(true);
  };

  // Open Image Picker
  const handlePickMedia = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setMediaSelected(result.assets[0]);
      }
    } catch (error) {
      console.error('Media pick error:', error);
    }
  };

  // Upload API call
  const handleUploadConfirm = async () => {
    if (!mediaSelected) {
      Alert.alert('No File Selected', 'Please select an image or video.');
      return;
    }

    try {
      const fileToUpload = {
        uri:
          Platform.OS === 'android'
            ? mediaSelected.uri
            : mediaSelected.uri.replace('file://', ''),
        name: mediaSelected.uri.split('/').pop(),
        type: mediaSelected.type === 'video' ? 'video/mp4' : 'image/jpeg',
      };

      const formData = new FormData();
      formData.append('file', fileToUpload);
      formData.append('user_id', 'test-user-123'); // dummy user_id for now

      console.log('Uploading file:', fileToUpload);

      const response = await axios.post(
        'https://xn16lom3t8.execute-api.us-east-2.amazonaws.com/Prod/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Upload successful:', response.data);
      Alert.alert('Success', 'Media uploaded successfully!');
      setModalVisible(false);
      setMediaSelected(null);
      navigation.goBack();
    } catch (error) {
      console.error(
        'Upload failed:',
        error.response ? error.response.data : error.message
      );
      Alert.alert('Upload failed', 'Please try again.');
    }
  };

  // Dynamic styles based on screen width
  const isSmall = width < 360;
  const isLarge = width > 600;

  const dynamicStyles = {
    fontBig: { fontSize: isSmall ? 18 : isLarge ? 28 : 22 },
    fontMedium: { fontSize: isSmall ? 14 : isLarge ? 20 : 16 },
    fontSmall: { fontSize: isSmall ? 12 : isLarge ? 16 : 14 },
    paddingCard: { padding: isSmall ? 12 : isLarge ? 24 : 18 },
    buttonPadding: { padding: isSmall ? 12 : isLarge ? 20 : 16 },
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Slot Reservation Title in Card */}
      <View style={[styles.headerCard, dynamicStyles.paddingCard]}>
        <FontAwesome5 name="calendar-check" size={22} color="#1E40AF" />
        <Text style={[styles.headerTitle, dynamicStyles.fontBig]}>
          Slot Reservation
        </Text>
      </View>

      {/* Reservation Box */}
      <View style={[styles.card, dynamicStyles.paddingCard]}>
        <Text style={[styles.cardTitle, dynamicStyles.fontMedium]}>{title}</Text>

        <View style={styles.detailRow}>
          <MaterialIcons name="schedule" size={20} color="#2563EB" />
          <Text style={[styles.detailText, dynamicStyles.fontSmall]}>
            {selectedTime}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="event" size={20} color="#2563EB" />
          <Text style={[styles.detailText, dynamicStyles.fontSmall]}>
            {selectedDate}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <FontAwesome5 name="rupee-sign" size={16} color="#2563EB" />
          <Text style={[styles.detailText, dynamicStyles.fontSmall]}>
            ₹{pricePerSlot} / slot
          </Text>
        </View>
      </View>

      {/* Availability Section */}
      <View style={[styles.card, dynamicStyles.paddingCard]}>
        <Text style={[styles.sectionTitle, dynamicStyles.fontMedium]}>
          Availability
        </Text>
        <View style={styles.infoRow}>
          <MaterialIcons name="block" size={20} color="#DC2626" />
          <Text style={[styles.infoText, dynamicStyles.fontSmall]}>
            Reserved: {reservedSlots}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="check-circle" size={20} color="#16A34A" />
          <Text style={[styles.infoText, dynamicStyles.fontSmall]}>
            Available: {availableSlots}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="people" size={20} color="#1D4ED8" />
          <Text style={[styles.infoText, dynamicStyles.fontSmall]}>
            Max Capacity: {maxSlots}
          </Text>
        </View>
      </View>

      {/* Input Form */}
      <View style={[styles.card, dynamicStyles.paddingCard]}>
        <Text style={[styles.sectionTitle, dynamicStyles.fontMedium]}>
          Reservation Details
        </Text>

        <Text style={[styles.inputLabel, dynamicStyles.fontSmall]}>
          Number of slots
        </Text>
        <TextInput
          style={[styles.input, dynamicStyles.fontMedium]}
          keyboardType="numeric"
          placeholder="Enter quantity"
          value={slotCount}
          onChangeText={(text) => setSlotCount(text.replace(/[^0-9]/g, ''))}
        />

        <View style={styles.amountBox}>
          <View style={styles.amountRow}>
            <Text style={[styles.amountLabel, dynamicStyles.fontSmall]}>
              Price per slot:
            </Text>
            <Text style={[styles.amountValue, dynamicStyles.fontSmall]}>
              ₹{pricePerSlot}
            </Text>
          </View>
          <View style={styles.amountRow}>
            <Text
              style={[
                styles.amountLabel,
                dynamicStyles.fontMedium,
                { fontWeight: '700' },
              ]}
            >
              Total Amount:
            </Text>
            <Text
              style={[
                styles.amountValue,
                dynamicStyles.fontMedium,
                { fontWeight: '700', color: '#1E40AF' },
              ]}
            >
              ₹{totalAmount}
            </Text>
          </View>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity
        style={[
          styles.button,
          dynamicStyles.buttonPadding,
          !slotCount && styles.buttonDisabled,
        ]}
        onPress={handleReserve}
        disabled={!slotCount}
        activeOpacity={0.85}
      >
        <MaterialIcons name="check-circle" size={22} color="#fff" />
        <Text style={[styles.buttonText, dynamicStyles.fontMedium]}>
          Confirm Reservation
        </Text>
      </TouchableOpacity>

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
            <Text style={styles.modalSubtitle}>{title}</Text>
            <Text style={styles.modalSubtitle}>
              {selectedDate} • {selectedTime}
            </Text>

            <TouchableOpacity
              style={styles.mediaPickerBox}
              onPress={handlePickMedia}
              activeOpacity={0.7}
            >
              {mediaSelected ? (
                <>
                  <MaterialIcons
                    name="check-circle"
                    size={40}
                    color="#16A34A"
                  />
                  <Text style={styles.placeholderText}>Media Selected</Text>
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="cloud-upload"
                    size={40}
                    color="#9CA3AF"
                  />
                  <Text style={styles.placeholderText}>
                    Tap to select media
                  </Text>
                </>
              )}
            </TouchableOpacity>

            <View style={styles.modalButtons}>
              {mediaSelected && (
                <TouchableOpacity
                  style={[styles.modalButton, styles.uploadButton]}
                  onPress={handleUploadConfirm}
                >
                  <Text
                    style={[styles.modalButtonText, { color: '#fff' }]}
                  >
                    Confirm Upload
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={[styles.modalButtonText, { color: '#fff' }]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },

  // Header Box with Shadow
  headerCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  headerTitle: { fontWeight: '700', marginLeft: 10, color: '#1E40AF' },

  // Card
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  cardTitle: { fontWeight: '600', marginBottom: 14, color: '#111' },

  // Details
  detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  detailText: { marginLeft: 8, fontWeight: '500', color: '#374151' },

  // Section
  sectionTitle: { fontWeight: '600', marginBottom: 12, color: '#111' },

  // Info
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  infoText: { marginLeft: 8, color: '#374151' },

  // Input
  inputLabel: { color: '#6B7280', marginBottom: 6 },
  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
  },

  // Amount Box
  amountBox: { marginTop: 10 },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  amountLabel: { color: '#374151' },
  amountValue: { fontWeight: '500', color: '#111' },

  // Button
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E40AF',
    borderRadius: 12,
    elevation: 5,
    marginBottom: 40,
  },
  buttonDisabled: { backgroundColor: '#9CA3AF' },
  buttonText: { color: '#fff', fontWeight: '600', marginLeft: 8 },

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
    width: '90%',
    maxWidth: 400,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#111',
    textAlign: 'center',
  },
  modalSubtitle: {
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

export default NoOfSlot;
