import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function TripCard({ title, dates }: { title: string, dates: string }) {
  return (
      <TouchableOpacity onPress={openTrip} style={styles.card}>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {

  },
  dateText: {

  },
  card: {
      width: 10,
      height: 10
  }
});
