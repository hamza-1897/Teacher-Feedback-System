import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TeacherCard from './TeacherCard';

// Yahan apna TeacherCard import karein
// import TeacherCard from '../components/TeacherCard'; 

const HomeScreen = ({navigation}) => {

    const insets = useSafeAreaInsets();

  return (
    <View style={{ 
      flex: 1, 
      paddingTop: insets.top,    // Upar notch se bachayega
      paddingBottom: insets.bottom // Niche home bar se bachayega
    }}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        
        {/* Header Section (User Profile) */}
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <View style={styles.avatarBorder}>
              <Image 
                source={{ uri: 'https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg' }} 
                style={styles.avatar} 
              />
            </View>
            <View>
              <Text style={styles.greeting}>Hello !!!</Text>
              <Text style={styles.userName}>Muhammad Hamza</Text>
            </View>
          </View>
        </View>
       
        {/* Section Title & Badge */}
        <View style={styles.sectionHeader}>
          <View style={styles.titleRow}>
            <Text style={styles.sectionTitle}>Evaluations</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
          
        </View>

      
        <View style={styles.cardsContainer}>
            {/* Yahan apne TeacherCard components ko render karein */}
            <TeacherCard 
              name="Mr. Usman"
              subject="Database A&M"
              image="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-175774.jpg?semt=ais_hybrid&w=740&q=80"
              isSubmitted={false}
              iconName="book"
              isOnline={true}
                navigation={navigation}
            />
            <TeacherCard 
              name="Mr. Ali Hamza"
              subject="Data Science"
              image="https://img.freepik.com/premium-vector/boy-with-blue-hoodie-blue-hoodie-with-hoodie-it_1230457-42660.jpg?semt=ais_hybrid&w=740&q=80"
              isSubmitted={false}
              iconName="science"
              isOnline={false}
                              navigation={navigation}

            />
            <TeacherCard 
              name="Ms. Ariba Sitara"
              subject="ITPM & C.S"
              image="https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg"
              isSubmitted={true}
              iconName="book"
              isOnline={true}
                              navigation={navigation}

            />
        </View>

        {/* Quick Tip Section */}
        <View style={styles.tipBox}>
          <View style={styles.tipIconContainer}>
            <MaterialIcons name="lightbulb" size={20} color="white" />
          </View>
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Quick Tip</Text>
            <Text style={styles.tipDescription}>
              Honest feedback helps your teachers improve their teaching methods. Take 2 minutes to share your thoughts!
            </Text>
          </View>
        </View>

        {/* Bottom Spacer (Tabs ke liye space) */}
        <View style={{ height: 100 }} />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8', // background-light
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 32,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarBorder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'rgba(19, 91, 236, 0.2)', // primary/20
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e2e8f0',
  },
  greeting: {
    fontSize: 12,
    color: '#64748b', // slate-500
    fontWeight: '500',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#101622', // background-dark
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#101622',
    marginRight: 8,
  },
  badge: {
    backgroundColor: 'rgba(19, 91, 236, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  badgeText: {
    color: '#135bec',
    fontSize: 12,
    fontWeight: '700',
  },
  viewAll: {
    fontSize: 12,
    color: '#135bec',
    fontWeight: '600',
  },
  cardsContainer: {
    minHeight: 50,
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 12,
    color: '#94a3b8',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
  tipBox: {
    backgroundColor: 'rgba(19, 91, 236, 0.05)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(19, 91, 236, 0.1)',
  },
  tipIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#135bec',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tipTextContainer: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1e293b',
  },
  tipDescription: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
    lineHeight: 18,
  },
});

export default HomeScreen;