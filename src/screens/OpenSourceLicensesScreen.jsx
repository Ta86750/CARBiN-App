import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const licenses = [
  'ASM based accessors helper used by json-smart',
  'Accompanist FlowLayout library',
  'Accompanist Pager layouts',
  'Accompanist System UI Controller library',
  'Activity',
  'Activity Compose',
  'Activity Kotlin Extensions',
  'Adyen Checkout Core module',
  'Adyen Client Side Encryption',
  'Alipay Android sdk',
  'Android App Startup Runtime',
  'Android AppCompat Library',
  'Android Arch-Common',
];

const OpenSourceLicensesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Open source licences</Text>
      </View>

      {/* License List */}
      <FlatList
        data={licenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default OpenSourceLicensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  list: {
    padding: 16,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
