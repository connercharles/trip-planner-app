import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../constants/Colors';

export default function IdeaCard(
    { title, desc, link, date, onPress }:
    { title: string, desc: string, link: string, date: string,
        onPress: ((event: GestureResponderEvent) => void) | undefined })
{
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
          <Text style={styles.titleText}>
              {title}
          </Text>
          <Text style={styles.titleText}>
              {desc}
          </Text>
          <Text style={styles.dateText}>
              {link}
          </Text>
          <Text style={styles.dateText}>
              {date}
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
      width: '100%',
      marginVertical: '2.5%',
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.pageBackground,
      backgroundColor: '#fff',
      // height: 300
  }
});
