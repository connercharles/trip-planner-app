import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';


export default function Banner() {
  return (
    <View style={styles.banner}>
          <Text style={styles.logo}>
            Trippy 
            <FontAwesome name='user' size={21} color={Colors.secColor} style={styles.icon} />
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    banner: {
      backgroundColor: Colors.mainColor,
      width: '100%',
      flex:1,
      justifyContent:'flex-start',
      marginBottom: Dimensions.get('window').height - (Dimensions.get('window').height - 485)
    },
    logo: {
      textAlign:'center',
      paddingTop:20,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'allan',
      fontStyle: 'italic',
      letterSpacing: 1,
      color: Colors.white
    },
    icon: {
        paddingLeft: 20,
        marginLeft:20,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: Colors.secColor,
        alignContent:'flex-end',
        justifyContent:'flex-end'
    }
});
