import React from "react"
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import Banner from '../components/Banner';
import Colors from '../constants/Colors';
import { useState } from 'react';
import Modal from 'react-native-modal';
import TicketCard from "../components/TicketCard";

export default function TicketHolderScreen({navigation, route}: {navigation: any, route: any}) {

    const [ticketList, setTicketList] = useState([
        {id: 1, title: "SLC > PHX", date: "Tue 10 Jan", time: "7:30 AM-1:00 PM"},
        {id: 2, title: "PHX > SLC", date: "Tue 17 Jan", time: "9:30 AM-2:00 PM"}
    ])

    const showTicketScreen = () => {
        
    }

    return (
        <SafeAreaView style={styles.container}>
        <Banner showBack= {true}/>
        <View style={styles.nameBar}>
            <Text style={styles.tripName}>{route.params.name}</Text>
        </View>
        <View style={styles.textContainer}>
            {ticketList.map((item) => {
                return <TicketCard key={item.id} title={item.title} date={item.date} time={item.time} onPress={showTicketScreen}/>
            })}
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginHorizontal: '5%',
        backgroundColor: Colors.pageBackground,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
      tripName: {
        flex:1,
        flexBasis:'auto',
        textAlign:'center',
        fontSize: 20,
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
      }
});