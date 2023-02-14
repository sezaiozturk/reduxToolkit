import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../feature/counter/counterSlice';

export default function First() {
  const counter=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>First Counter:{counter}</Text>
      <Button title='+' onPress={()=>dispatch(increment)}/>
      <Button title='-' onPress={()=>dispatch(decrement)}/>
    </View>
  )
}