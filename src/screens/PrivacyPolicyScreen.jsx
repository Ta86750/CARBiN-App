import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const links = [
  { text: 'Outside the United States Supplement', url: '#' },
  { text: 'United States Privacy Supplement', url: '#' },
  { text: 'Cookie Policy', url: '#' },
  { text: 'Enterprise Clients and Carbin for Business', url: '#' },
  { text: 'Privacy Supplement for International Users', url: '#' },
  { text: 'Brazil Privacy Supplement', url: '#' },
  { text: 'Privacy Policy Supplement for Slot Booking', url: '#' },
  { text: 'Colombia Only', url: '#' },
  { text: 'Türkiye Only', url: '#' },
  { text: 'Non-User Privacy Notice', url: '#' },
  { text: 'Carbin Marketplace Privacy Terms', url: '#' },
  { text: 'Insurance Supplement', url: '#' },
];

const CarbinPrivacyPolicy = ({ navigation }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const openLink = (url) => {
    if (url !== '#') Linking.openURL(url);
  };

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      {/* Header */}
      <View style={[styles.header, isDark && styles.headerDark]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <Text style={[styles.headerText, isDark && styles.textLight]}>Privacy Policy</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.legal, isDark && styles.textMuted]}>Legal terms</Text>
        <Text style={[styles.title, isDark && styles.textLight]}>Carbin Privacy</Text>

        <Text style={[styles.description, isDark && styles.textMuted]}>
          Our Privacy Policy explains what personal information we collect, how we use it,
          how it’s shared, and your rights. Carbin helps users book ad slots effectively and transparently.
        </Text>

        <TouchableOpacity onPress={() => openLink('#')}>
          <Text style={styles.link}>Full Privacy Policy</Text>
        </TouchableOpacity>

        <Text style={[styles.description, isDark && styles.textMuted]}>
          Please review the supplemental privacy policies listed below if you use Carbin services
          for slot management, advertising partnerships, or business usage.
        </Text>

        <Text style={[styles.subHeading, isDark && styles.textLight]}>
          Supplemental Privacy Policy Documents
        </Text>

        {links.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => openLink(item.url)}>
            <Text style={styles.link}>• {item.text}</Text>
          </TouchableOpacity>
        ))}

        <Text style={[styles.description, isDark && styles.textMuted]}>
          <Text style={{ fontWeight: '600', color: isDark ? '#fff' : '#000' }}>Carbin.org</Text> is a
          separate and independent entity from Carbin, Inc. Access the{' '}
          <Text style={styles.link}>Carbin.org Privacy Policy</Text>.
        </Text>

        <Text style={[styles.subHeading, { marginTop: 24 }, isDark && styles.textLight]}>
          Related articles
        </Text>
      </ScrollView>
    </View>
  );
};

export default CarbinPrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  headerDark: {
    backgroundColor: '#1e1e1e',
    borderBottomColor: '#333',
  },
  backBtn: {
    marginRight: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  legal: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    lineHeight: 20,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12,
  },
  link: {
    fontSize: 14,
    color: '#00ADB5',
    marginBottom: 8,
  },
  textLight: {
    color: '#fff',
  },
  textMuted: {
    color: '#aaa',
  },
});
