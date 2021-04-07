import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Colors from '../constants/Colors';


export default function IdeaCard(
    { title, date, time, onPress }:
    { title: string, date: string, time: string, 
        onPress: ((event: GestureResponderEvent) => void) | undefined })
{
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.banner}>
        <Text style={styles.dateText}>
            {date}
        </Text>
        <Text style={styles.dateText}>
            {time}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    display:'flex',
    flexDirection:'row',
  },
  title: {
    backgroundColor: Colors.lightOrange,
    width: '100%',
    marginHorizontal: 0,
    marginTop: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    fontSize: 20,
    color: Colors.white,
    paddingLeft: 10,
    marginBottom: 10,
  },
  dateText: {
    flex:1,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  card: {
      width: '100%',
      marginVertical: '2.5%',
      // padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.pageBackground,
      backgroundColor: '#fff',
      // height: 300
  }
});