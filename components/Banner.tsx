import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';


export default function Banner() {
  return (
    <View style={styles.banner}>
          <Text style={styles.logo}>
            Trippy 
          </Text>
          <View style={styles.circle}>
            <FontAwesome name='user' size={21} color={Colors.secColor} style={styles.icon} />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
    banner: {
      backgroundColor: Colors.mainColor,
      width: '100%',
      display:'flex',
      flexDirection:'row',
      // flex:1,
      justifyContent:'flex-start',
      // marginBottom: Dimensions.get('window').height - (Dimensions.get('window').height - 485)
    },
    logo: {
      flex:1,
      flexBasis:'auto',
      textAlign:'center',
      paddingTop:20,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'allan',
      fontStyle: 'italic',
      letterSpacing: 1,
      color: Colors.white,
      paddingBottom: 5
    },
    circle: {
      width: 30,
      height: 30,
      marginLeft: -30,
      borderRadius: 1000,
      borderWidth: 1,
      borderColor: Colors.secColor,
      alignSelf:'flex-end',
      textAlign:'center'
    },
    icon: {
      // width: 30,
      lineHeight: 20,
      height: 30
      // alignSelf:'center'
        // paddingLeft: 20,
        // marginLeft:20,
        // margin: 50,
        // alignContent:'flex-end',
        // justifyContent:'flex-end'
    }
});
