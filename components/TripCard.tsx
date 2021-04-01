import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../constants/Colors';

export default function TripCard(
    { title, dates, onPress }: { title: string, dates: string, 
        onPress: ((event: GestureResponderEvent) => void) | undefined })
{
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

const styles = StyleSheet.create({
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
