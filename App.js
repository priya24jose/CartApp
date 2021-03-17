import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
<View>
<TextInput style={styles.searchInput}>placeholder='Search here......'</TextInput>
   </View>
      
  
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput:{
    width:'100%',
    height:'100%',
    paddingLeft:8,
    fontSize:18
  }
});
