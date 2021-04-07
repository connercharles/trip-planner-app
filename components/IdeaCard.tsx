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
          <Text style={styles.linkText}>
              {link}
          </Text>
          <Text style={styles.descText}>
              {desc}
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
    backgroundColor: Colors.lightOrange,
    width: '100%',
    marginHorizontal: 0,
    marginTop: 0,

    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 16,
    color: Colors.white,
    paddingLeft: 10,
  },
  descText: {
    paddingLeft: 10,
  },
  dateText: {
    paddingLeft: 10,
  },
  linkText: {
    paddingLeft: 10,
    color: Colors.secColor,
    textDecorationLine: 'underline',
    fontSize: 10,
    margin: 0
  },
  card: {
      width: '100%',
      marginVertical: '2.5%',
      paddingBottom: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.pageBackground,
      backgroundColor: '#fff',
      // height: 300
  }
});
