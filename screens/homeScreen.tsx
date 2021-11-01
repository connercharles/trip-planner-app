import React, { useState, useEffect } from 'react';
import { TouchableOpacity, TextInput, ScrollView, StyleSheet, Button, View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Modal from 'react-native-modal';
import AddButton from '../components/AddButton';
import MapButton from '../components/MapButton';
import TripCard from '../components/TripCard';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import DatePicker from 'react-native-datepicker';

export default function HomeScreen({ navigation }: { navigation: any }) {

  const [tripList, setTripList] = useState([
    {id : 1, location : "Arizona", startDate : "April 22", endDate: "April 24"},
    {id : 2, location : "Denver", startDate : "Aug 1", endDate: "Aug 5"},
    {id : 3, location : "Moab", startDate : "", endDate: ""},
    {id : 4, location : "Cali", startDate : "May 13", endDate: "May 17"},
  ]);

  const [popupShow, setPopupShow] = useState(false);
  
  //Modal Data
  const [newTripTitle, setNewTripText] = useState("");
  const [newTripStartDate, setNewTripStartDate] = useState("");
  const [newTripEndDate, setNewTripEndDate] = useState("");

  const showPopup = () => {
    setPopupShow(true);
  };
  const hidePopup = () => setPopupShow(false);

  const makeNewTrip = () => {
    if ((newTripTitle != "" && newTripStartDate == "" && newTripEndDate == "")
        || (newTripTitle != "" && newTripStartDate != "" && newTripEndDate != "")) {

      setTripList(arr => [...arr, {id : arr.length + 1, location: newTripTitle, startDate: newTripStartDate, endDate: newTripEndDate}]);
      setNewTripStartDate("");
      setNewTripEndDate("");
      setNewTripText("");

      setPopupShow(false);
    }
  }

  //modal data- pass to read: popupShow : boolean , 
  //            pass for callback: hidePopup : (() => void) , setNewTripText(String)

  return (
    <SafeAreaView style={styles.container}>
      <Banner showBack={false}/>
      <ScrollView>
        <Text style={styles.title}>Trips</Text>
        <View testID="cardHolder" style={styles.cardHolder}>
          {tripList.map((trip) => {
            return <TripCard key={trip.id} 
              title={trip.location} 
              dates={
                (trip.startDate === '') ? '' : trip.startDate + "-" + trip.endDate
              } 
              onPress={() => navigation.navigate('Trip', {name : trip.location})}/>
          })}
          <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
            <View style={styles.modal}>
                <TextInput
                  style={styles.inputTitle}
                  onChangeText={setNewTripText}
                  value={newTripTitle}
                  placeholder='new trip title...'
                  placeholderTextColor={Colors.white}
                  />
                  <View style={styles.dateHolder}>
                    <DatePicker
                      style={styles.inputDate}
                      date={newTripStartDate}
                      mode="date"
                      placeholder="Start Date"
                      format="MMM D YYYY"
                      minDate="2021-01-01"
                      maxDate="2023-12-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 30,
                          // borderBottomWidth: 0,
                          borderTopWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          maxWidth: 100,
                          }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {setNewTripStartDate(date.toString())}}
                    />
                    <TouchableOpacity style={styles.clearDate} onPress={() => setNewTripStartDate("")}>
                      <FontAwesome name='times' size={21} color={Colors.darkBackground} />
                    </TouchableOpacity>
                    <DatePicker
                      style={styles.inputDate}
                      date={newTripEndDate}
                      mode="date"
                      placeholder="End Date"
                      format="MMM D YYYY"
                      minDate="2021-01-01"
                      maxDate="2023-12-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 30,
                          // borderBottomWidth: 0,
                          borderTopWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          maxWidth: 100,
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {setNewTripEndDate(date)}}
                    />
                    <TouchableOpacity style={styles.clearDate} onPress={() => setNewTripEndDate("")}>
                      <FontAwesome name='times' size={21} color={Colors.darkBackground} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.modalBtn} onPress={makeNewTrip}>
                    <Text style={styles.modalBtnText}>ADD TRIP</Text>
                  </TouchableOpacity>
            </View>
          </Modal>
          <View></View>
        </View>
      </ScrollView>
      <MapButton onPress={navigation.navigate('Map')}/>
      <AddButton onPress={showPopup}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 20,
  },
  cardHolder: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
    backgroundColor: Colors.pageBackground,
    paddingBottom: Math.round(Dimensions.get('window').height - 240),
  },
  modal: {
    backgroundColor: Colors.white,
    borderRadius: 10,

    marginHorizontal: 20,
    maxHeight: 250,

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dateHolder: {
    marginLeft: 15,
    marginVertical: 10,
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  inputTitle: {
    height: 50,
    margin: 12,
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
  inputDate: {
    marginBottom: 10,
    // width: 200,
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
  clearDate: {
    margin: 10,
  }
});
