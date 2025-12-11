import { View, Text ,StyleSheet, TextInput,SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native'
import React from 'react'

const NewRegistreation = ({navigation}) => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="white"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            placeholderTextColor="white"
          />
        </View>

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.switchButton}
        >
          <Text style={styles.switchText} onPress={() => navigation.navigate('Login')} >
             'Already a member? Log in'
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
      color: '#333',
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: '#555',
    },
    input: {
      backgroundColor: 'gray',
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
      fontSize: 16,
    },
    button: {
      backgroundColor: 'darkblue',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    switchButton: {
      marginTop: 20,
      alignItems: 'center',
    },
    switchText: {
      color: 'darkblue',
      fontSize: 14,
    },
  });

export default NewRegistreation