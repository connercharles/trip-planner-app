import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerGestureEvent } from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function TripCard({ title, dates, onPress }: 
                                { title: string, dates: string, onPress: any }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
          <Text style={styles.titleText}>
              {title}
          </Text>

          <Text style={styles.dateText}>
              {dates}
          </Text>
      </View>
    </TouchableOpacity>
  );
}

function openTrip() {
  

  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
  },
  titleText: {

  },
  dateText: {

  },
  card: {
      width: '45%',
      margin: '2.5%',
      padding: '1%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.pageBackground,
      backgroundColor: '#fff',

      // height: 300
  }
});
