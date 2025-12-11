import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get("window");

const MoreDetail = ({ navigation, route }) => {
  const { 
    title = "Unknown", 
    price = "N/A", 
    footfall = "N/A", 
    description = "", 
    location = "", 
    images = [] 
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Top Section */}
      <View style={styles.fixedHeader}>
        <Image
          source={{ uri: images?.[0] ?? "https://via.placeholder.com/300" }}
          style={styles.fixedImage}
          resizeMode="cover"
        />

        {/* Title + Price (left) and Footfall (right) */}
        <View style={styles.infoRow}>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>₹ {price}</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.footfall}>👣 {footfall}/day</Text>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Gap below fixed header */}
        <View style={{ height: 280 }} />

        {/* Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>
            Catch eyes. Clean air. Your brand on CARBiN at {title}
          </Text>
          <Text style={styles.sectionHeading}>Overview</Text>
          <Text style={styles.sectionText}>
            {description || `CARBin at ${title} is a premium ad display unit within one of Delhi Metro's busiest hubs. 
            It captures CO₂ while showcasing your brand with maximum impact—sustainability meets visibility.`}
          </Text>
        </View>

        {/* Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Highlights</Text>
          {[
            "High daily footfall from commuters",
            "Digital & static display options",
            "Targets students, professionals, tourists",
            "24/7 ad exposure with ambient lighting",
            "Eco-friendly and futuristic branding",
            "Near colleges, offices, and malls"
          ].map((point, idx) => (
            <Text key={idx} style={styles.bullet}>• {point}</Text>
          ))}
        </View>

        {/* Location */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Location</Text>
          {location ? (
            <Text style={styles.sectionText}>{location}</Text>
          ) : null}
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?q=80&w=2070&auto=format&fit=crop" }}
            style={styles.mapImage}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* Fixed Bottom Bar */}
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.bottomTitle}>{title}</Text>
          <Text style={styles.terms}>* Terms & conditions apply</Text>
        </View>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() =>
            navigation.navigate("ReservePage", {
              title,
              price,
              footfall,
              image: images?.[0] ?? ""
            })
          }
        >
          <Text style={styles.bookText}>Reserve Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FDFDFD'},
  scrollContent: { paddingBottom: 140 },

  // Fixed Header Block
  fixedHeader: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingBottom: 10,
    zIndex: 10,
  },
  fixedImage: {
    width: width - 40,
    height: 180,
    borderRadius: 12,
    marginTop: 10,
    alignSelf: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
    paddingHorizontal: 5,
  },
  leftColumn: { flex: 1 },
  rightColumn: { alignItems: "flex-end" },
  title: { fontSize: 20, fontWeight: "700", color: "#111" },
  price: { fontSize: 16, fontWeight: "500", color: "#333", marginTop: 4 },
  footfall: { fontSize: 14, color: "#666" },

  // Content sections
  section: { marginTop: 20, marginBottom: 10, paddingHorizontal: 20 },
  sectionHeading: { fontSize: 18, fontWeight: '600', marginBottom: 8, color: '#222' },
  sectionText: { fontSize: 15, color: '#444', lineHeight: 22, marginBottom: 10 },
  bullet: { fontSize: 15, color: '#444', marginBottom: 5, lineHeight: 22 },
  mapImage: { width: '100%', height: 200, borderRadius: 12, marginTop: 10 },

  // Bottom Bar
  bottomContainer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 20, backgroundColor: '#fff',
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10, elevation: 5,
  },
  bottomTitle: { fontSize: 18, fontWeight: '600', color: '#111' },
  terms: { fontSize: 12, color: 'gray', marginTop: 4 },
  bookButton: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  bookText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
});

export default MoreDetail;
