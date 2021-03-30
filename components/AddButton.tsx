import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';


import Colors from '../constants/Colors';

export default function AddButton() {
  return (
    <TouchableOpacity onPress={openPopup} style={styles.button}>
        <Text style={styles.text}>
          +
        </Text>
    </TouchableOpacity>
  );
}

function openPopup() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.mainColor,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.025,
        height: Dimensions.get('window').width * 0.025,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        textAlign: 'center',
      },
    text: {
      color: Colors.white,
      fontSize: 32,
      height: 'inherit',
      lineHeight: Dimensions.get('window').width * 0.025 * 0.83
    }
  });
