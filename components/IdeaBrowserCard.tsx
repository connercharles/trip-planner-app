import * as React from 'react';

import Colors from '../constants/Colors';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function IdeaBrowserCard({ title, link, onPress }:
    { title: string, link: string,
        onPress: ((event: GestureResponderEvent, t: string, l : string) => void)}) {

    // API Key for an accound with Pixabay. TODO: Change when in prod.
    const api_key = '20981500-b637fa19db287adce1bdca1eb';
    const api_domain = 'https://pixabay.com/api/';

    const [axoisData, setAxoisData] = useState("");

    useEffect( () => {
      axios.get(api_domain + '?key=' + api_key + '&q=' + title.split(' ').join('+')) // title.split(' ').join('+')
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

    const [addButtonDisabled, setAddButtonDisabled] = useState(false);

    const addIdea = (e : GestureResponderEvent, t: string, l: string) => {
      onPress(e, t, l);
      setAddButtonDisabled(true);
    }

     return (
      <View style={styles.card}>
        <View style={styles.ideaText}>
            <Text style={styles.titleText}>
                {title}
            </Text>
            <Text style={styles.linkText}>
                {link}
            </Text>
            <TouchableOpacity disabled={addButtonDisabled} onPress ={(e) => {addIdea(e, title, link)} }>
              <FontAwesome name='plus' size={20} style={{margin: 10, lineHeight: 23, height: 20, opacity: addButtonDisabled ? 0 : 1}}></FontAwesome>
            </TouchableOpacity>
        </View>
        <View style= {styles.ideaPicture}>
          <Image style={styles.img} source={{uri: axoisData}} />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
      backgroundColor: Colors.lightOrange,
      width: '100%',
      marginHorizontal: 0,
      marginTop: 0,
  
      borderTopLeftRadius: 10,
      fontSize: 18,
      color: Colors.white,
      paddingLeft: 10,
    },
    linkText: {
      paddingHorizontal: 10,
      color: Colors.secColor,
      textDecorationLine: 'underline',
      fontSize: 12,
      margin: 0,
    },
    card: {
      display:'flex',
      flexDirection:'row',
      width: '100%',
      marginVertical: '2.5%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Colors.pageBackground,
      backgroundColor: '#fff',
    },
    ideaText: {
      width: '70%',
      justifyContent: 'space-between',
      // paddingBottom: 10,
    },
    ideaPicture: {
      flex:1,
    },
    img: {
      width: '100%',
      height: 100,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      overflow: 'hidden',
    }
  });
