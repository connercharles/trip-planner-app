import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from '../components/Banner';
import Colors from '../constants/Colors';

export default function TicketScreen({navigation, route}: {navigation: any, route: any}) {


    return (
        <SafeAreaView style={styles.container}>
            <Banner showBack={true}/>
            <View style={styles.textContainer}>
                <Text style={{textAlign:'center', fontSize:27, paddingTop:5}}>Flight Information</Text>
                <Text style={{textAlign:'center', fontSize:25, paddingTop:60}}>{route.params.flightName}</Text>
                <Text style={{textAlign:'center', fontSize:25, paddingTop:10}}>{route.params.flightDate}</Text>
                <Text style={{textAlign:'center', fontSize:25, paddingTop:10}}>{route.params.flightTime}</Text>
                <Text style={{textAlign:'center', fontSize:18, paddingTop:80}}>Check in is suggested at least 1 hour before departure</Text>

            </View>
            <View style={styles.ticketContainer}>
                <Text style={{textAlign:'left', fontSize:22, paddingLeft:5,paddingTop:5}}>TICKET INFO</Text>
                <Text style={{textAlign:'left', fontSize:22, paddingLeft:5,paddingTop:15}}>Flight ID: JHKL_098_LMN</Text>
                <Text style={{textAlign:'left', fontSize:45, paddingLeft:5,paddingTop:15}}>|||||| |||| ||| ||||||</Text>

            </View>
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
      backgroundColor: Colors.pageBackground,
    },
    ticketContainer: {
      flex: 1,
      borderWidth:1,
      borderColor: Colors.black,
      backgroundColor: Colors.white
    },
    textWords: {
        textAlign:'center'
    }
});