import * as React from 'react';

import Banner from '../components/Banner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ScrollView, View, Text, GestureResponderEvent, Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import { useState } from 'react';
import IdeaBrowserCard from '../components/IdeaBrowserCard';

export default function IdeasBrowserScreen ({navigation, route}: {navigation: any, route: any}) {

  const [ideaList, setIdeaList] = useState([
    {id : 1, title : "Washington Monument", link : "225 N Washington Pkwy, Tempe, AZ 76685"},
    {id : 2, title : "Grand Canyon", link : "S Entrance Rd, Grand Canyon Village, AZ 86023"},
    {id : 3, title : "Desert Botanical Garden", link : "1201 N Galvin Pkwy, Phoenix, AZ 85008"},
    {id : 4, title : "The Torch Theater", link : "4721 N Central Ave, Phoenix, AZ 85012"},
    {id : 5, title : "Desert Canyon", link : "9431 W Northern Ave, Glendale, AZ 85305"}
  ]);

  const addIdeaFromBrowser = (event : GestureResponderEvent, titleTxt : string, linkTxt : string) => {
    navigation.navigate("Trip", {newIdeaTitle : titleTxt, newIdeaLink : linkTxt});
  }

    return (

        <SafeAreaView style={styles.container}>
        <Banner showBack= {true}/>
        <ScrollView>
          <View style={styles.nameBar}>
              <Text style={styles.tripName}>Ideas in {route.params.name}</Text>
          </View>
          <View style={styles.cardHolder}>
            {ideaList.map((idea) => {
              return <IdeaBrowserCard key={idea.id} title={idea.title} link={idea.link} onPress={addIdeaFromBrowser}/>
            })}
          </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.pageBackground
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
    cardHolder: {
      marginHorizontal: '5%',
      backgroundColor: Colors.pageBackground,
      paddingBottom: Math.round(Dimensions.get('window').height - 200),  
    },
});