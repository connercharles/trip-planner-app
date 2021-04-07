import * as React from 'react';
import {useState} from 'react';
import { TextInput, ScrollView, StyleSheet, Button, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Modal from 'react-native-modal';
import AddButton from '../components/AddButton';
import TripCard from '../components/TripCard';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
// import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

export default function HomeScreen({ navigation }: { navigation: any }) {

  const [tripList, setTripList] = useState([
    {id : 1, location : "Arizona", startDate : "Mar 3", endDate: "Mar 7"},
    {id : 2, location : "Denver", startDate : "Mar 3", endDate: "Mar 7"},
    {id : 3, location : "Moab", startDate : "Mar 3", endDate: "Mar 7"},
    {id : 4, location : "Cali", startDate : "Mar 3", endDate: "Mar 7"},

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
        <Text style={styles.title}>Trips</Text>
        <View testID="cardHolder" style={styles.cardHolder}>
          {tripList.map((trip) => {
            return <TripCard key={trip.id} title={trip.location} dates={trip.startDate + "-" + trip.endDate} onPress={() => navigation.push('Trip')}/>
          })}
          <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
            <View style={styles.modal}>
              {/* <Text style={{ fontSize: 40 }}>New Trip</Text> */}
              {/* <View style={{justifyContent:'center', marginTop:50}}> */}
                <TextInput
                  style={styles.inputTitle}
                  onChangeText={setNewTripText}
                  value={newTripTitle}
                  placeholder=' new trip title'
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
                          marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {setNewTripStartDate(date.toString())}}
                    />
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
                          marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {setNewTripEndDate(date)}}
                    />
                  </View>
              {/* </View> */}
              <View style={styles.modalBtn}>
                <Button title={"Add Trip"} onPress={makeNewTrip}/>
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
  },
  modal: {
    backgroundColor: Colors.white,
    borderRadius: 10,

    // marginVertical: 75,
    marginHorizontal: 20,
    // marginBottom: 420,
    maxHeight: 250,

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  dateHolder: {
    marginLeft: 15,
    marginBottom: 10,
    marginVertical: 10
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
    backgroundColor: Colors.mainColor,
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
    width: 200
  },
  modalBtn: {
    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
