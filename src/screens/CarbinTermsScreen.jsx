import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CarbinTermsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.headerText}>Terms of Service</Text>
      </View>

      <Text style={styles.subHeader}>Legal terms</Text>
      <Text style={styles.mainTitle}>Carbin Terms of Service</Text>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Ionicons name="alert-circle" size={22} color="#00b894" />
        <View style={styles.infoContent}>
          <Text style={styles.infoText}>
            If you're using Carbin in regions with different carbon capture regulations or ad policies, make sure you refer to the specific{' '}
            <Text style={styles.link}>Local Policy Addendums</Text> in your area.
          </Text>
          <Text style={styles.infoText}>
            Carbin complies with environmental standards and digital advertising laws across different countries. Refer to your local data protection and climate compliance terms for full details.
          </Text>
        </View>
      </View>

      {/* Terms for Users */}
      <Text style={styles.sectionTitle}>Terms for Carbin Users</Text>
      <Text style={styles.bodyText}>
        By using the Carbin app, you agree to allow the app to access your location for accurate AQI (Air Quality Index) monitoring and to display targeted ads from certified climate-conscious brands.
      </Text>

      <Text style={styles.bodyText}>
        Carbin uses anonymized environmental and user interaction data to help optimize carbon capture zones. All data is processed under{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://gdpr.eu/')}>GDPR</Text> and{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.privacy.gov.au/')}>regional privacy laws</Text>.
      </Text>

      <Text style={styles.bodyText}>
        For disputes or questions, contact us at{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('mailto:support@carbin.tech')}>
          support@carbin.tech
        </Text>{' '}
        or visit our help center.
      </Text>

      <Text style={styles.bodyText}>
        <Text style={styles.bold}>Note:</Text> Section 14 outlines the arbitration process in case of issues regarding carbon credit rewards or ad impressions. Please review carefully.
      </Text>

      <Text style={styles.updatedText}>Last Updated: April 18, 2025</Text>
      <Text style={styles.thankText}>Thank you for being a part of Carbin's clean air revolution!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  subHeader: {
    color: 'gray',
    fontSize: 14,
    marginTop: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#eafaf1',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContent: {
    flex: 1,
    marginLeft: 10,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  },
  link: {
    color: '#0984e3',
    textDecorationLine: 'underline',
  },
  bold: {
    fontWeight: '600',
  },
  updatedText: {
    fontSize: 13,
    color: '#888',
    marginTop: 10,
  },
  thankText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 6,
  },
});
