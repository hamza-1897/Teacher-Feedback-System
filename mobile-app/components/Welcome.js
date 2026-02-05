import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Developer from './Developer'

export default function Welcome() {
  return (
    <View style={styles.container}>
        <View style={styles.containerContent}>
      <Text style={styles.heading}>Welcome</Text>
          <Text style={styles.appNAme}>Teacher Feedback System</Text>
          </View>
        <View >
    <Developer customStyle={styles.developerStyle} />
    </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'center',   
        alignItems:'center',
        backgroundColor:'#18281b',
    },
    containerContent:{
        justifyContent:'center',   
        alignItems:'center',
        width:'100%',   
    height:'50%',
    },
    heading:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
    },
    appNAme :{
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
    },
    developerStyle:{
        marginTop:90,
        bottom:-60,
    }

})