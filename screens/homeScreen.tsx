import * as React from 'react';
import {useState} from 'react';
import { Dimensions, TouchableOpacity, ScrollView, StyleSheet, Button, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Modal from 'react-native-modal';
import AddButton from '../components/AddButton';
import TripCard from '../components/TripCard';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

export default function HomeScreen({ navigation }: { navigation: any }) {

  const [tripList, setTripList] = useState([
    {id : 1, location : "az", startDate : "Mar 3", endDate: "Mar 7"},
    {id : 2, location : "co", startDate : "Mar 3", endDate: "Mar 7"},
    {id : 3, location : "ut", startDate : "Mar 3", endDate: "Mar 7"},
    {id : 4, location : "ca", startDate : "Mar 3", endDate: "Mar 7"},

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
    if (newTripTitle != "" || (newTripTitle != "" && newTripStartDate != "" && newTripEndDate != "")) {

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
        <View testID="cardHolder" style={styles.cardHolder}>
          {tripList.map((trip) => {
            return <TripCard key={trip.id} title={trip.location} dates={trip.startDate + "-\n" + trip.endDate} onPress={() => navigation.push('Trip')}/>
          })}
          <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
            <View style={{backgroundColor:Colors.white, marginVertical:50 ,marginHorizontal:10, padding:40, borderRadius:10, flex:1}}>
              <Text style={{ fontSize: 40 }}>New Trip</Text>
              <View style={{justifyContent:'center', marginTop:50}}>
                <TextInput 
                  style={styles.input}
                  onChangeText={setNewTripText}
                  value={newTripTitle}
                  />
                  <DatePicker
                    style={{marginTop: 20, width: 200}}
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
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {setNewTripStartDate(date.toString())}}
                  />
                  <DatePicker
                    style={{marginTop: 20, width: 200}}
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
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {setNewTripEndDate(date)}}
                  />
              </View>
              <View style={{marginTop:100}}>
                <Button title={"Enter"} onPress={makeNewTrip}/>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardHolder: {
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
  }
});

