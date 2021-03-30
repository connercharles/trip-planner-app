import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/Colors';


export default function Banner() {
  return (
    <View style={styles.banner}>
          <Text style={styles.logo}>
            Trippy 
          </Text>
          <FontAwesome name='user' size={21} color={Colors.secColor} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: Colors.mainColor,
        textAlign: 'center',
        width: '100%',
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'allan',
        fontStyle: 'italic',
        letterSpacing: 1,
        color: Colors.white
    },
    icon: {
        borderRadius: 1,
        borderWidth: 1,
        borderColor: Colors.secColor,
    }
});
