import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Home';
import HistoryScreen from './History';

  const Tab = createBottomTabNavigator();
const MyTabs = ({route}) => {

  const { stdId, user, gender } = route.params || {};
  
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={({ route }) => ({
      
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'center',
        
        tabBarActiveTintColor: '#1c12d6', 
        tabBarInactiveTintColor: 'gray',   
        tabBarStyle: { 
          paddingBottom: 5, 
          height: 60,
          backgroundColor: '#fff',
          marginBottom: 20,
          marginHorizontal: 10,
          borderRadius: 16, 
        },
      })}
      
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}} initialParams={{stdId, user, gender}} />
      <Tab.Screen name="History" component={HistoryScreen} options={{headerShown:true , headerTitle: 'Feedback History',tabBarLabel: 'My Feedback'}} initialParams={{stdId}} />
    </Tab.Navigator>
  )
}

export default MyTabs