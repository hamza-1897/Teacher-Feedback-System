import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TeacherCard from './TeacherCard';
import { useState,useEffect } from 'react';
import axios from 'axios';

const HomeScreen = ({navigation , route}) => {

  const BaseURI = 'http://10.104.253.200:3000/api/teacher/getAll';

    const user = route.params?.user || 'Student';
    const gender = route.params?.gender || 'female';
    const stdId = route.params?.stdId || null;
    const insets = useSafeAreaInsets();
    const [teachers, setTeachers] = useState([]);
  



  const avatarUrl = gender === 'male' 
    ? 'https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg' 
    : 'https://img.pikbest.com/png-images/20241006/hijab-girl-cartoon-character_10930324.png!sw800';

useEffect(() => {
  
  
  
    fetchTeachers();
  
}, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(BaseURI);
      setTeachers(response.data.data);
      
      
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  return (
    <View style={{ 
      flex: 1, 
      paddingTop: insets.top,    
      paddingBottom: insets.bottom 
    }}>
     
        
      
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <View style={styles.avatarBorder}>
              
                <Image 
                  source={{ uri: avatarUrl }} 
                  style={styles.avatar} 
                />
            
            
            </View>
            <View>
              <Text style={styles.greeting}>Welcome !!</Text>
              <Text style={styles.userName}>{user}</Text>
            </View>
          </View>
        </View>
       
     
        <View style={styles.sectionHeader}>
          <View style={styles.titleRow}>
            <Text style={styles.sectionTitle}>Evaluations</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
          
        </View>

      
        <View style={styles.cardsContainer}>

            
          <FlatList
          data={teachers}
          keyExtractor={(item) => item._id.toString()} 
          renderItem={({ item }) => (
            <TeacherCard 
               name={item.name} 
               subject={item.subject} 
               image={item.photoUrl} 
               isSubmitted={item.isSubmitted}
               iconName="book"
               navigation={navigation}
               teacher={item}
               stdId={stdId}
            />
          )}
          contentContainerStyle={{ flexGrow: 1 }}
           />
            
        </View>

        
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

       
        <View style={{ height: 100 }} />

      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8', 
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
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
    flex:1,
    paddingHorizontal: 10,
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