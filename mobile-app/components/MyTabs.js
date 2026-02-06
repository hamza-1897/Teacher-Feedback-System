import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Home';
import HistoryScreen from './History';


const MyTabs = () => {

    const Tab = createBottomTabNavigator();
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
       
        tabBarActiveTintColor: '#1c12d6', 
        tabBarInactiveTintColor: 'gray',   
        tabBarStyle: { 
          paddingBottom: 5, 
          height: 60,
          backgroundColor: '#fff' 
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  )
}

export default MyTabs