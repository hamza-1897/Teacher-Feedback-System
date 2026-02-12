import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';

const FeedbackScreen = ({navigation , route}) => {

  const BaseURL = 'http://10.104.253.200:3000/api/feedback/submit';

  const { stdId, teacherData } = route.params || {};


  const insets = useSafeAreaInsets();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');



  const submitFeedback = async () => {  
    try {
      const response = await axios.post(BaseURL, {
        teacherId: teacherData._id,
        studentId: stdId,
        rating: rating,
        comment: comment
      });
      console.log('Feedback submitted:', response.data);
      navigation.replace('Success');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      
    }
  }

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          
          <View style={styles.profileSection}>
            <View style={styles.imageWrapper}>
              <Image
                source={{ uri: teacherData?.photoUrl }}
                style={styles.teacherImage}
              />
            
            </View>
            <Text style={styles.teacherName}>{teacherData?.name }</Text>
            <Text style={styles.subjectText}>{teacherData?.subject }</Text>
          </View>

          
          <View style={styles.ratingSection}>
            <Text style={styles.sectionTitle}>How was your experience?</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity 
                  key={star} 
                  onPress={() => setRating(star)}
                  activeOpacity={0.7}
                >
                  <MaterialIcons
                    name={star <= rating ? "star" : "star-outline"}
                    size={42}
                    color={star <= rating ? "#135bec" : "#cbd5e1"}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.ratingHint}>Tap to rate from 1 to 5 stars</Text>
          </View>

          
          <View style={styles.inputSection}>
            <Text style={styles.label}>Tell us more</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Share your detailed feedback about the course and Teacher..."
              placeholderTextColor="#94a3b8"
              multiline={true}
              numberOfLines={6}
              textAlignVertical="top"
              value={comment}
              onChangeText={setComment}
            />
            
          </View>
        </ScrollView>

        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.submitButton}
            activeOpacity={0.8}
            onPress={submitFeedback}
          >
            <Text style={styles.submitButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileSection: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  teacherImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: 'rgba(19, 91, 236, 0.1)',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#135bec',
    padding: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
  },
  teacherName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#101622',
  },
  subjectText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
    marginTop: 4,
  },
  ratingSection: {
    padding: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#101622',
    marginBottom: 16,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  ratingHint: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 12,
  },
  inputSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#101622',
    marginBottom: 12,
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 20,
    fontSize: 15,
    color: '#334155',
    minHeight: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  inputFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 4,
  },
  footerHint: {
    fontSize: 11,
    color: '#94a3b8',
  },
  buttonContainer: {
    padding: 24,
    backgroundColor: '#f6f6f8',
  },
  submitButton: {
    backgroundColor: '#135bec',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#135bec',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default FeedbackScreen;