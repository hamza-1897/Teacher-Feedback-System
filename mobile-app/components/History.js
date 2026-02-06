import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HistoryCard from './HistoryCard';


const History = () => {

        const insets = useSafeAreaInsets();
    
  return (
    <View style={{ 
      flex: 1, 
      paddingTop: insets.top,    // Upar notch se bachayega
      paddingBottom: insets.bottom // Niche home bar se bachayega
    }}>
      <HistoryCard 
        name="Mr. Usman"
        subject="Database A&M"
        rating={4}
        comment="The teacher was very helpful and clear in explaining the concepts."
        image="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-175774.jpg?semt=ais_hybrid&w=740&q=80"
      />
    </View>
  )
}

export default History