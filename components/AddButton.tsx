import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';


export default function AddButton({ onPress } : { onPress: ((event: GestureResponderEvent) => void) | undefined }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <FontAwesome style={styles.text} name='plus' size={20} color={Colors.white} />
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
    fontSize: 22,
    height: 60,
    lineHeight: 60,    
    alignSelf: 'center'
  },
  });
