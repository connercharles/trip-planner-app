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
    axios.get(api_domain + '?key=' + api_key + '&q=' + title.split(' ').join('+'))
      .then(response => {
        console.log('getting data from axios', response.data.hits[0].previewURL);
        setTimeout(() => {
            setAxoisData(response.data.hits[0].previewURL);
        }, 2000)
    })
    .catch(error => {
        console.log(error);
    });
  })

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View>
          <Text style={styles.titleText}>
              {title}
          </Text>
          <Text style={styles.dateText}>
              {dates}
          </Text>
          <Image style={styles.img} source={{uri: axoisData}} />
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
  },
  img: {
    width: 50,
    height: 50
  }
});
