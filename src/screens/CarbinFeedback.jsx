import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Picker } from '@react-native-picker/picker';

const CarbinFeedback = ({ navigation }) => {
  const [feedbackTopic, setFeedbackTopic] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = () => {
    if (!feedbackTopic || !feedbackMessage) return;
    // You can integrate submission logic here (API, email, etc.)
    alert('Feedback submitted. Thank you!');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Share your feedback</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>
          Thanks for sending us your ideas, issues, or appreciation. While we may not respond
          individually, our team reviews all feedback to improve Carbin for everyone.
        </Text>

        <Text style={styles.text}>
          For questions or support, visit our{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://carbin.support')}>
            Help Centre
          </Text>{' '}
          or{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('mailto:support@carbin.com')}>
            contact us
          </Text>
          .
        </Text>

        <Text style={styles.label}>What's your feedback about?</Text>
        <View style={styles.dropdown}>
          {/* <Picker
            selectedValue={feedbackTopic}
            onValueChange={(value) => setFeedbackTopic(value)}
            style={styles.picker}
          >
            <Picker.Item label="Please select" value="" />
            <Picker.Item label="Booking experience" value="booking" />
            <Picker.Item label="Ad slot visibility" value="visibility" />
            <Picker.Item label="Technical issue" value="technical" />
            <Picker.Item label="Feature request" value="feature" />
            <Picker.Item label="Other" value="other" />
          </Picker> */}
        </View>

        <Text style={styles.label}>Your message</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={5}
          placeholder="Type your feedback here..."
          value={feedbackMessage}
          onChangeText={setFeedbackMessage}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          style={[
            styles.submitBtn,
            (!feedbackTopic || !feedbackMessage) && styles.submitBtnDisabled,
          ]}
          disabled={!feedbackTopic || !feedbackMessage}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.subHeading}>Need to get in touch?</Text>
          <Text style={styles.text}>
            We’ll ask a few questions to get you to the right place.
          </Text>
          <TouchableOpacity
            style={styles.contactBtn}
            onPress={() => Linking.openURL('mailto:support@carbin.com')}
          >
            <Text style={styles.contactText}>Contact us</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarbinFeedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 12,
  },
  content: {
    padding: 16,
  },
  text: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
    lineHeight: 20,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
    fontSize: 14,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  picker: {
    height: 48,
    padding: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  submitBtn: {
    backgroundColor: '#00ADB5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitBtnDisabled: {
    backgroundColor: '#ccc',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    color: '#00ADB5',
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  contactBtn: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  contactText: {
    fontWeight: '600',
  },
});
