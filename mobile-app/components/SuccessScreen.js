import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SuccessScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      
      <View style={styles.mainContent}>
        {/* Success Icon with Abstract Bubbles */}
        <View style={styles.iconWrapper}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <MaterialIcons name="check" size={64} color="white" />
            </View>
            
            {/* Decorative Bubbles (Absolute Positioned) */}
            <View style={[styles.bubble, styles.bubble1]} />
            <View style={[styles.bubble, styles.bubble2]} />
            <View style={[styles.bubble, styles.bubble3]} />
          </View>
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Feedback Submitted!</Text>
          <Text style={styles.description}>
            Thank you for your valuable input. Your feedback helps us improve the teaching experience.
          </Text>
        </View>

        {/* Decorative Grid Pattern (Lower opacity like HTML) */}
        <View style={styles.gridPattern}>
          <View style={[styles.gridBox, { backgroundColor: 'rgba(30, 64, 175, 0.4)' }]} />
          <View style={[styles.gridBox, { backgroundColor: 'rgba(30, 64, 175, 0.2)' }]} />
          <View style={[styles.gridBox, { backgroundColor: 'rgba(30, 64, 175, 0.6)' }]} />
          <View style={[styles.gridBox, { backgroundColor: 'rgba(30, 64, 175, 0.1)' }]} />
        </View>
      </View>

      {/* Footer Action */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.homeButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // background-light
    justifyContent: 'space-between',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  iconWrapper: {
    marginBottom: 32,
  },
  outerCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: 'rgba(30, 64, 175, 0.15)', // primary/15
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  innerCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#1E40AF', // primary
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#1E40AF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  bubble: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: 'rgba(30, 64, 175, 0.3)',
  },
  bubble1: {
    width: 16,
    height: 16,
    top: -8,
    right: -8,
    backgroundColor: 'rgba(30, 64, 175, 0.4)',
  },
  bubble2: {
    width: 12,
    height: 12,
    bottom: -4,
    left: -4,
    backgroundColor: 'rgba(30, 64, 175, 0.3)',
  },
  bubble3: {
    width: 8,
    height: 8,
    top: 32,
    left: -16,
    backgroundColor: 'rgba(30, 64, 175, 0.5)',
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: 280,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#475569', // slate-600
    textAlign: 'center',
    lineHeight: 24,
  },
  gridPattern: {
    flexDirection: 'row',
    marginTop: 48,
    gap: 8,
    opacity: 0.2,
    width: '100%',
    maxWidth: 320,
  },
  gridBox: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
  },
  footer: {
    padding: 24,
    width: '100%',
  },
  homeButton: {
    backgroundColor: '#1E40AF',
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1E40AF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SuccessScreen;