import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Hi Lokesh,{"\n"}how can we help?</Text>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#f06292" />
        <TextInput
          placeholder="Search help"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {['Guest', 'Home host', 'Experience host', 'Service host', 'Travel admin'].map(tab => (
          <TouchableOpacity key={tab} style={styles.tab}>
            <Text style={[styles.tabText, tab === 'Guest' && styles.activeTab]}> {tab} </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Warning Box */}
      <View style={styles.warningBox}>
        <Text style={styles.warningTitle}>⚠️ Your identity is not fully verified</Text>
        <Text style={styles.warningText}>
          Identity verification helps us check that you’re really you. It’s one of the ways we keep CARBiN secure.
        </Text>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Check identity verification status</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.linkText, { color: '#555', fontSize: 14 }]}>Learn more</Text>
        </TouchableOpacity>
      </View>

      {/* Getting Started Section */}
      <Text style={styles.sectionTitle}>Guides for getting started</Text>
      {[
        { icon: 'hand-left-outline', text: 'Getting started with CARBiN' },
        { icon: 'search-outline', text: 'Finding an ad slot that’s right for you' },
        { icon: 'shield-checkmark-outline', text: 'CARBiN Coverage for advertisers' },
        { icon: 'person-outline', text: 'Setting up your CARBiN account' },
      ].map((item, index) => (
        <TouchableOpacity key={index} style={styles.guideItem}>
          <Ionicons name={item.icon} size={22} color="#000" />
          <Text style={styles.guideText}>{item.text}</Text>
          <Ionicons name="chevron-forward-outline" size={18} color="#999" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  backBtn: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    marginRight: 15,
  },
  tabText: {
    fontSize: 14,
    color: '#999',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#000',
    paddingBottom: 2,
  },
  warningBox: {
    backgroundColor: '#fff3f3',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fdd',
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cc0000',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  linkButton: {
    paddingVertical: 6,
  },
  linkText: {
    color: '#f06292',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  guideItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  guideText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },
});

export default HelpScreen;
