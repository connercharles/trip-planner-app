import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

import Colors from '../constants/Colors';


export default function AddButton({ onPress } : { onPress: ((event: GestureResponderEvent) => void) | undefined }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>
          +
        </Text>
    </TouchableOpacity>
  );
}
    
const styles = StyleSheet.create({
  button: {
    position:'absolute',
    bottom:20,
    right:20,
    backgroundColor: Colors.mainColor,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 60,
    height: 60,
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  text: {
    color: Colors.white,
    fontSize: 32,
    height: 60,
    lineHeight: 50
  },
  });
