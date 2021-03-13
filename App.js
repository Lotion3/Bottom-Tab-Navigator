import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './screens/facebook'
import Instagram from './screens/instagram'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component() {
 render(){
   return(
     <View>
      <Container/>
     </View>
   )
 }
}
const BottomTab= createBottomTabNavigator({
   Facebook:{screens:Facebook},
   Instagram:{screens:Instagram}
})
const Container=createAppContainer(BottomTab)
