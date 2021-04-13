import * as React from 'react';

import Banner from '../components/Banner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import ChecklistItem from '../components/ChecklistItem';
import AddButton from '../components/AddButton';
import { useState } from 'react';
import Modal from 'react-native-modal';
import IdeaBrowserCard from '../components/IdeaBrowserCard';

export default function IdeasBrowserScreen ({navigation, route}: {navigation: any, route: any}) {

  const [ideaList, setIdeaList] = useState([
    {id : 1, title : "Have Fun!", link : "2255 N University Pkwy, Provo, UT 84604"},
    {id : 2, title : "Party Hard", link : ""},
    {id : 3, title : "Debug later", link : ""},
  ]);

  const echo = (title : string, link : string) => {
    console.log("echo " + title + " " + link);
  }

    return (

        <SafeAreaView style={styles.container}>
        <Banner showBack= {true}/>
          <View style={styles.nameBar}>
              <Text style={styles.tripName}>Ideas in {route.params.name}</Text>
          </View>
        <ScrollView>
            {ideaList.map((idea) => {
              return <IdeaBrowserCard key={idea.id} title={idea.title} link={idea.link} onPress={echo}/>
            })}
        </ScrollView>
    </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.pageBackground
    },
    textContainer: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginHorizontal: '10%',
        backgroundColor: Colors.pageBackground,
    },
    input: {
      height: 50,
      borderWidth: 1,
      backgroundColor: Colors.lightOrange,
      width: '100%',
      marginHorizontal: 0,
      marginTop: 0,
      borderBottomWidth: 0,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      fontSize: 25,
      color: Colors.white,
      paddingLeft: 10,  
    },
    tripName: {
      flex:1,
      flexBasis:'auto',
      textAlign:'center',
      fontSize: 25,
      fontWeight: 'bold',
      letterSpacing: 1,
      alignSelf:'center',
      color: 'black'
    },
    nameBar: {
      width: '100%',
      display:'flex',
      flexDirection:'row',
      height: 50
    },
    modalView: {
      backgroundColor: Colors.white, 
      borderRadius: 10, 
      flex: 1,
      marginHorizontal: 20,
      maxHeight: 100,
      flexDirection: 'column',
    },
    modalBtn: {
      height: 50,
      backgroundColor: Colors.lightBlue,
      width: '100%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'center'
    },
    modalBtnText: {
      color: Colors.white,
      fontSize: 20,
      textAlign: 'center',
    },
});