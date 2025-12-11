// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // or any other icon set you prefer

// const InfoRow = ({ label, value, actionLabel, onPress }) => (
//   <View style={styles.row}>
//     <View>
//       <Text style={styles.label}>{label}</Text>
//       <Text style={styles.value}>{value}</Text>
//     </View>
//     <TouchableOpacity onPress={onPress}>
//       <Text style={styles.action}>{actionLabel}</Text>
//     </TouchableOpacity>
//   </View>
// );

// const PersonalInfoScreen = ({navigation}) => {
//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity style={styles.backButton}>
//         <Ionicons name="arrow-back" size={24} color="#000" 
//         onPress={() => navigation.goBack()} />
//       </TouchableOpacity>

//       <Text style={styles.header}>Personal info</Text>

//       <InfoRow label="Legal name" value="Lokesh K." actionLabel="Edit" />
//       <View style={styles.divider} />

//       <InfoRow label="Preferred first name" value="Not provided" actionLabel="Add" />
//       <View style={styles.divider} />

//       <InfoRow label="Phone number" value="Provide phone number" actionLabel="Add" />
//       <View style={styles.divider} />

//       <InfoRow label="Email" value="l***@gmail.com" actionLabel="Edit" />
//       <View style={styles.divider} />

//       <InfoRow label="Address" value="Not provided" actionLabel="Add" />
//       <View style={styles.divider} />

//       <InfoRow label="Emergency contact" value="Not provided" actionLabel="Add" />
//       <View style={styles.divider} />

//       <InfoRow label="Identity verification" value="Not started" actionLabel="Start" />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   backButton: {
//     marginBottom: 10,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 14,
//   },
//   label: {
//     fontSize: 16,
//     color: '#000',
//   }, 