import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function Developer({customStyle}) {
  return (
    <View style={[styles.container, customStyle]}>
      <Text style={styles.text}>Created with ❤️ by Caprisons</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
  },
})