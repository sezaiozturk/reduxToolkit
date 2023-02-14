import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Second() {
  const counter=useSelector((state)=>state.counter.value);
  return (
    <View style={{flex:1,backgroundColor:'#e0e0e0'}}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Second Counter:{counter}</Text>
    </View>
  )
}