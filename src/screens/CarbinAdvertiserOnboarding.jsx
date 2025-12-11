import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const steps = [
  {
    title: 'Choose Location',
    description: 'Browse and select the area or neighborhood where you want to advertise.',
    image: { uri: 'https://picsum.photos/seed/location/300/200' },
  },
  {
    title: 'Reserve Slot',
    description: 'Pick your preferred date and time slot for the ad display.',
    image: { uri: 'https://picsum.photos/seed/slot/300/200' },
  },
  {
    title: 'Make Payment',
    description: 'Complete the purchase to confirm your ad reservation.',
    image: { uri: 'https://picsum.photos/seed/payment/300/200' },
  },
  {
    title: 'Upload Media',
    description: 'Add your images, videos, or banner to be featured during your ad slot.',
    image: { uri: 'https://picsum.photos/seed/media/300/200' },
  },
];

export default function CarbinAdvertiserOnboarding() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>You're just 4 steps away from launching your campaign</Text>

      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Image source={step.image} style={styles.image} resizeMode="cover" />
          <Text style={styles.stepTitle}>{index + 1}. {step.title}</Text>
          <Text style={styles.stepDescription}>{step.description}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start your campaign</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  stepContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff3c6f',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
