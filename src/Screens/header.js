import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';



const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };




export default function Header() {
  return (
     
    <View style={styles.header}>
            <Image source={logo} />
<View>
<Text style={styles.headerText}>privacy policy   contacts</Text> 
   </View>
      
  
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
      width:'100%',
      height:'100%',
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
        fontSize:'20',
        color:'red'
  }
});
