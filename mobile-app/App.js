import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/Welcome';
import LoginScreen from './components/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyTabs from './components/MyTabs';
import FeedbackScreen from './components/FeedbackScreen';
import SuccessScreen from './components/SuccessScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* Login Screen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />

        {/* Home Screen */}
        <Stack.Screen 
          name="Main" 
          component={MyTabs} 
          options={{ headerShown: false }} 
        />

         {/* Feedback Screen */}
        <Stack.Screen 
          name="Feedback" 
          component={FeedbackScreen} 
          options={{ title: 'Feedback Form', headerStyle: { backgroundColor: '#dfe2e7'  }, headerTintColor: '#0c0b0b' }} 
        />
      <Stack.Screen 
          name="Success" 
          component={SuccessScreen} 
          options={{headerShown : false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
