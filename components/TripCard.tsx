import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

import Colors from '../constants/Colors';

// API Key for an accound with Pixabay. TODO: Change when in prod.
const api_key = '20981500-b637fa19db287adce1bdca1eb';
const api_domain = 'https://pixabay.com/api/';

export default function TripCard(
    { title, dates, onPress }: { title: string, dates: string, 
        onPress: ((event: GestureResponderEvent) => void) | undefined })
{
  const [axoisData, setAxoisData] = useState("");

  useEffect( () => {
    axios.get(api_domain + '?key=' + api_key + '&q=' + title.split(' ')) // title.split(' ').join('+')
      .then(response => {
        console.log('getting data from axios', response.data.hits[0].webformatURL);
        setTimeout(() => {
            setAxoisData(response.data.hits[0].webformatURL);
        }, 2000)
    })
    .catch(error => {
        console.log(error);
    });
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.titleText}>
          {title}
      </Text>
      <Text style={styles.dateText}>
          {dates}
      </Text>
      <Image style={styles.img} source={{uri: axoisData}} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    width: '100%',
    paddingLeft: 10,
  },
  dateText: {
    fontSize: 10,
    color: Colors.darkBackground,
    width: '100%',
    paddingLeft: 10,
    marginTop: -5,
    marginBottom: 5
  },
  card: {
      width: '45%',
      margin: '2.5%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.pageBackground,
      backgroundColor: '#fff',
      alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden'
  }
});
