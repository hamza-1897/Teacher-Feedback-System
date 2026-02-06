import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TeacherCard = ({ name, subject, image, isSubmitted, iconName, navigation }) => {
  return (
    <View style={[styles.card, isSubmitted && styles.submittedCard]}>
      <View style={styles.cardLeft}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: image }} 
            style={[styles.teacherImage, isSubmitted && styles.grayscale]} 
          />
         
        </View>
        
        <View>
          <Text style={[styles.teacherName, isSubmitted && styles.submittedText]}>{name}</Text>
          <View style={styles.subjectContainer}>
            <MaterialIcons 
                name={iconName || "book"} 
                size={14} 
                color={isSubmitted ? "#94a3b8" : "#64748b"} 
            />
            <Text style={[styles.subjectText, isSubmitted && styles.submittedTextSmall]}>
                {subject}
            </Text>
          </View>
        </View>
      </View>

      {/* Action Button or Submitted Badge */}
      {isSubmitted ? (
        <View style={styles.submittedBadge}>
          <MaterialIcons name="check-circle" size={14} color="#16a34a" />
          <Text style={styles.submittedBadgeText}>Submitted</Text>
        </View>
      ) : (
        <TouchableOpacity 
            style={styles.feedbackButton} 
            onPress={() => navigation.navigate('Feedback')}
            activeOpacity={0.7}
        >
          <Text style={styles.feedbackButtonText}>Give Feedback</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    marginBottom: 12,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 2,
  },
  submittedCard: {
    backgroundColor: '#f8fafc',
    opacity: 0.7,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 12,
  },
  teacherImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#e2e8f0',
  },
  grayscale: {
    opacity: 0.6,
  },
  onlineStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'white',
  },
  teacherName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1e293b',
  },
  submittedText: {
    color: '#64748b',
  },
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    gap: 4,
  },
  subjectText: {
    fontSize: 12,
    color: '#64748b',
  },
  submittedTextSmall: {
    color: '#94a3b8',
  },
  feedbackButton: {
    backgroundColor: '#135bec',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  feedbackButtonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  submittedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  submittedBadgeText: {
    color: '#16a34a',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default TeacherCard;