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
        <View style={styles.title}>
            <Text style={{textAlign:'left'}}>{title}</Text>
         </View>
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
    display:'flex',
    width: '100%', 
    marginVertical: '2.5%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  dateText: {
    flex:1
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