import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HistoryCard = ({ feedback }) => {
  
  const { teacherId, rating, comment } = feedback;
  const { name, subject, photoUrl } = teacherId;


  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MaterialIcons 
          key={i}
          name={i <= rating ? "star" : "star-outline"} 
          size={18} 
          color={i <= rating ? "#135bec" : "#cbd5e1"} 
          style={styles.starIcon}
        />
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
     
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <Image source={{ uri: photoUrl }} style={styles.avatar} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.subject}>{subject}</Text>
          </View>
        </View>
      </View>

     
      <View style={styles.content}>
        <View style={styles.starsRow}>
          {renderStars()}
        </View>
        <Text style={styles.comment} numberOfLines={2}>
          "{comment}"
        </Text>
      </View>

      
      <View style={styles.footer}>
        <MaterialIcons name="chevron-right" size={20} color="#cbd5e1" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9', 
   
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0d121b',
  },
  subject: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  date: {
    fontSize: 10,
    color: '#94a3b8',
    fontWeight: '500',
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: -2, 
  },
  starIcon: {
    marginRight: 1,
  },
  comment: {
    fontSize: 13,
    color: '#475569', 
    fontStyle: 'italic',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
});

export default HistoryCard;