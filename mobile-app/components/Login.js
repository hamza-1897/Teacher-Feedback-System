import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ToastAndroid,
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const BaseURI = 'http://10.104.253.200:3000/api/students/login';

    const handleLogin = async () => {
      try {
        const response = await axios.post(BaseURI, {
          username: username.trim(),
          password: password.trim()
        });
        const stdId = response.data.data.id;
        const studentName = response.data.data.name; 
        const gender = response.data.data.gender;

        if (response.status === 200) {
          console.log('id:', stdId);
          navigation.replace('Main', { screen: 'Home',
             params: { user: studentName, stdId: stdId, gender: gender } });
          ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
        } 
        
       
     } catch (error) {
       if(response.status === 404 || response.status === 401) {
          ToastAndroid.show('invalid username or password', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Login failed. Please try again.', ToastAndroid.SHORT);
      }
     }
    }

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
        style={{ flex: 1 }}
      >
    <View style={styles.container}>
     
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          <View style={styles.headerContainer}>
            <View style={styles.iconBox}>
              <MaterialIcons name="school" size={48} color="#135bec" />
            </View>
            <Text style={styles.title}>TEACHER FEEDBACK SYSTEM</Text>
            <Text style={styles.subtitle}>Student Portal Access</Text>
          </View>

          <View style={styles.formContainer}>
            
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="person" size={20} color="#94a3b8" style={styles.inputIcon} />
                <TextInput 
                  style={styles.input}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Enter your student ID"
                  placeholderTextColor="#94a3b8"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={20} color="#94a3b8" style={styles.inputIcon} />
                <TextInput 
                  style={styles.input}
                  autoCapitalize="none"
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                  <MaterialIcons 
                    name={passwordVisible ? "visibility" : "visibility-off"} 
                    size={20} 
                    color="#94a3b8" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.loginButton} activeOpacity={0.8}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.footer}>
            <View style={styles.footerLine} />
            <Text style={styles.footerText}>AUTHORIZED ACCESS ONLY</Text>
          </View>

        </ScrollView>
      
    </View>
</KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  iconBox: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(19, 91, 236, 0.1)', 
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#101622', 
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b', 
    fontWeight: '500',
    marginTop: 8,
  },
  formContainer: {
    width: '100%',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#101622',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0', 
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#101622',
  },
  loginButton: {
    backgroundColor: '#135bec', 
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#135bec',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  footer: {
    marginTop: 64,
    alignItems: 'center',
    opacity: 0.6,
  },
  footerLine: {
    width: 40,
    height: 4,
    backgroundColor: '#cbd5e1', 
    borderRadius: 999,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 10,
    color: '#64748b',
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});

export default LoginScreen;