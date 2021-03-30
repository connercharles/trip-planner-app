import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


import Colors from '../constants/Colors';

export default function AddButton() {
  return (
    <TouchableOpacity onPress={openPopup} style={styles.button}>
        <Text>
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
        borderRadius: '1em',
        borderWidth: 0,
        color: Colors.white,
        width: '1em',
        alignItems: 'center'
    }
  });
