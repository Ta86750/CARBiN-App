import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/carbinLogo.png')} />
      
      {/* <Text style={styles.heading}>
        Welcome to <Text style={styles.carbinText}>CARB</Text>
        <Text style={styles.iText}>i</Text>
        <Text style={styles.carbinText}>N</Text> -
      </Text> */}

      <View style={styles.infoContainer}>
        <Text style={styles.phara}>Where clean Air meets smart Ads</Text>
        
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.getStartedButton} 
          onPress={() => navigation.navigate('HomePage')}   // ✅ updated
        >
          <Text style={styles.getStartedText}>Get Started </Text>
        </TouchableOpacity>

        


        <View style={styles.poweredBy}>
        <Text style={styles.power}>Powered By</Text>
        <Image style={styles.pow} source={require('../assets/opx.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    gap: 15,
  },
  infoContainer:{
    marginTop:20,
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop:130
  },
  heading: {
    fontSize: 35,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  carbinText: {
    color: 'green',
  },
  iText: {
    color: 'darkblue',
  },
  
  phara: {
    textAlign: 'center',
    fontSize: 19,
    alignContent:"center"
  },
  power: {
    textAlign: 'right',
  },
  pow: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  buttonsContainer: {
    marginTop: 60,
  },
  getStartedButton: {
    width: 200,
    height: 50,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedText: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
  },
  secondaryButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    
   
  },
  secondaryButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  poweredBy:{
    marginTop:140,
  right: 10,
  
  }
});
