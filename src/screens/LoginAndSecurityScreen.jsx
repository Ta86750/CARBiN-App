import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { Feather } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function LoginAndSecurityScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
<Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Login & Security</Text>

      {/* Login Section */}
      <Text style={styles.sectionTitle}>Login</Text>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Password</Text>
          <Text style={styles.subText}>Last updated 15 days ago</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* Security Tip */}
      <View style={styles.card}>
<Ionicons name="shield-checkmark-outline" size={24} color="#ffb300" />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Keeping your account secure</Text>
          <Text style={styles.cardDescription}>
            We regularly review accounts to make sure they’re as secure as possible. We’ll also let you know if there’s more we can do to increase the security of your account.
          </Text>
          <Text style={styles.linkText}>
            Learn about safety tips for <Text style={styles.link}>guests</Text> and <Text style={styles.link}>hosts</Text>.
          </Text>
        </View>
      </View>

      {/* Account Section */}
      <Text style={styles.sectionTitle}>Account</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Deactivate your account</Text>
        <TouchableOpacity>
          <Text style={styles.deactivateText}>Deactivate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  backButton: {
    marginBottom: 10,
    width: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  subText: {
    color: '#888',
    marginTop: 2,
  },
  updateText: {
    color: '#007bff',
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  cardContent: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    fontSize: 14,
    marginTop: 10,
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  deactivateText: {
    color: '#d9534f',
    fontWeight: '600',
  },
});
