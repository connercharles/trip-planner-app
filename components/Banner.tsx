import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';


export default function Banner() {
  return (
    <View style={styles.banner}>
          <Text style={styles.logo}>
            <i>Trippy</i>  
          </Text>
          <FontAwesome name='user' size={21} color={Colors.secColor} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.mainColor,
        textAlign: 'center',
        padding: '10px 10px',
        width: '100%',
    },
    logo: {
        fontSize: '2em',
        fontWeight: 'bold',
        fontFamily: 'allan',
        fontStyle: 'normal',
        letterSpacing: 1,
        color: Colors.white
    },
    icon: {
        borderRadius: '1em',
        borderWidth: 1,
        borderColor: Colors.secColor,
    }
});
