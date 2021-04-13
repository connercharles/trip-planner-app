import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import { FontAwesome5 } from '@expo/vector-icons';


export default function ScheduleScreen({ navigation, route }: { navigation: any, route: any }) {

  const [ideaList, setIdeaList] = useState(route.params.ideas);

  return (
    <SafeAreaView style={styles.container}>
      <Banner showBack={true}/>

      <ScrollView>
        <View style={styles.nameBar}>
          <Text style={styles.tripName}>{"Schedule for " + route.params.name}</Text>
          <Text style={styles.tripDates}>{"April 22 - April 24"}</Text>
        </View>
        <View style={styles.banner}>
          <TouchableOpacity style={styles.arrowSection}>
            <FontAwesome5 name='arrow-left' size={16} style={styles.icon}></FontAwesome5>
            <Text style={styles.iconLabel}>Previous Day</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.arrowSection}>
            <Text style={styles.iconLabel}>Next Day</Text>
            <FontAwesome5 name='arrow-right' size={16} style={styles.icon}></FontAwesome5>
          </TouchableOpacity>
        </View>
        <Calendar data={ideaList} startDate={'April 22'}/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  nameBar: {
    marginBottom: 20,
  },
  tripName: {
    textAlign:'center',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'black',
  },
  tripDates: {
    textAlign:'center',
    fontSize: 20,
    letterSpacing: 1,
    color: Colors.darkBackground,
  },
  banner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginBottom: 10,
  },
  arrowSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconLabel: {
    paddingHorizontal: 5,
    fontSize: 16,
  },
  icon: {
    alignSelf: 'center',
  }
});
