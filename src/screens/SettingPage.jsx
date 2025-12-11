import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Profile</Text>

      {/* User Info */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>L</Text>
        </View>
        <View>
          <Text style={styles.name}>Lokesh</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')}>
            <Text style={styles.link}>Show profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings */}
      <SettingItem
        icon={<Ionicons name="person-outline" size={20} color="black" />}
        label="Personal information"
        onPress={() => navigation.navigate('ProfileInfo')}
      />
      <SettingItem
        icon={<Feather name="shield" size={20} color="black" />}
        label="Login & security"
        onPress={() => navigation.navigate('LoginAndSecurityScreen')}
      />
      <SettingItem
        icon={<FontAwesome5 name="money-bill-wave" size={20} color="black" />}
        label="Payments and payouts"
        onPress={() => navigation.navigate('PaymenAndPayout')}
      />
      <SettingItem
        icon={<Feather name="settings" size={20} color="black" />}
        label="Accessibility"
      />
      <SettingItem
        icon={<Feather name="bell" size={20} color="black" />}
        label="Notifications"
      />

      {/* Support */}
      <Text style={styles.sectionTitle}>Support</Text>
      <SettingItem
        icon={<Ionicons name="help-circle-outline" size={20} color="black" />}
        label="Visit the Help Centre"
        onPress={() => navigation.navigate('HelpScreen')}
      />
      <SettingItem
        icon={<MaterialIcons name="security" size={20} color="black" />}
        label="Get help with a safety issue"
      />
      <SettingItem
        icon={
          <MaterialCommunityIcons
            name="information-outline"
            size={20}
            color="black"
          />
        }
        label="How Carbin works"
        onPress={() => navigation.navigate('CarbinAdvertiserOnboarding')}
      />
      <SettingItem
        icon={<Feather name="edit-3" size={20} color="black" />}
        label="Give us feedback"
        onPress={() => navigation.navigate('CarbinFeedback')}
      />

      {/* Legal */}
      <Text style={styles.sectionTitle}>Legal</Text>
      <SettingItem
        icon={<Feather name="book-open" size={20} color="black" />}
        label="Terms of Service"
        onPress={() => navigation.navigate('CarbinTermsScreen')}
      />
      <SettingItem
        icon={<Feather name="book-open" size={20} color="black" />}
        label="Privacy Policy"
        onPress={() => navigation.navigate('PrivacyPolicyScreen')}
      />
      <SettingItem
        icon={<Feather name="book-open" size={20} color="black" />}
        label="Open source licences"
        onPress={() => navigation.navigate('OpenSourceLicensesScreen')}
      />

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

      {/* Version */}
      <Text style={styles.version}>Version 1.0.0 (1001)</Text>
    </ScrollView>
  );
};

// Reusable SettingItem
const SettingItem = ({ icon, label, onPress }) => {
  const Wrapper = onPress ? TouchableOpacity : View;
  return (
    <Wrapper style={styles.settingRow} onPress={onPress}>
      <View style={styles.iconWrap}>{icon}</View>
      <Text style={styles.settingText}>{label}</Text>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    backgroundColor: '#222',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    color: '#1E88E5',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconWrap: {
    width: 30,
    alignItems: 'center',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    marginVertical: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  version: {
    color: '#888',
    fontSize: 12,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default SettingPage;
