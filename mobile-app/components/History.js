import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const History = () => {

        const insets = useSafeAreaInsets();
    
  return (
    <View style={{ 
      flex: 1, 
      paddingTop: insets.top,    // Upar notch se bachayega
      paddingBottom: insets.bottom // Niche home bar se bachayega
    }}>
      <Text>History</Text>
    </View>
  )
}

export default History