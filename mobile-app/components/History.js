import { View, FlatList ,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import HistoryCard from './HistoryCard';
import axios from 'axios';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useIsFocused } from '@react-navigation/native';


const History = ({route}) => {

  const BaseURI = 'http://10.104.253.200:3000/api/feedback/getFeedbackHistory';

  const { stdId } = route.params || {};
  const insets = useSafeAreaInsets();
  const [feedbackHistory, setFeedbackHistory] = useState([]);

  const isFocused = useIsFocused();


  const fetchFeedbackHistory = async () => {
        try {
          const response = await axios.get(`${BaseURI}?studentId=${stdId}`);
          setFeedbackHistory(response.data.data);
        } catch (error) {
          console.error('Error fetching feedback history:', error);
        }
      };

useEffect(() => {
  if (isFocused){

  
    fetchFeedbackHistory();
  }
},[isFocused]);

if (feedbackHistory.length === 0) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MaterialIcons name="feedback" size={80} color="gray" />
      <Text style={{ fontSize: 18, color: 'gray', marginTop: 10 }}>
        No feedback submitted!
      </Text>
    </View>
  );
}

  return (
    <View style={{ 
      flex: 1, 
      paddingTop: insets.top,    
      paddingBottom: insets.bottom 
    }}>
    

<FlatList
  data={feedbackHistory}
  keyExtractor={(item) => item._id}
  renderItem={({ item }) => (
    <HistoryCard feedback={item} />
  )}
/>

    </View>
  )
}

export default History