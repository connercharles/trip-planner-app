import { ScrollView, TextInput, StyleSheet, View, Text, Button, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AddButton from '../components/AddButton';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import Popup from '../components/Popup';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import IdeaCard from '../components/IdeaCard';
import { FontAwesome } from '@expo/vector-icons';


export default function TripScreen({ navigation, route }: { navigation: any, route: any }) {

  const [ideaList, setIdeaList] = useState([
    {id : 1, title : "Camelback Mountain", desc: "It's the Echo Trailhead", link : "4925 E McDonald Dr, Phoenix, AZ 85018", date: "April 23"},
    {id : 2, title : "Jessica's Party", desc: "Bring a phone charger", link : "", date: "April 22, 7:00pm"},
    {id : 3, title : "Fashion Square Mall", desc: "", link : "", date: ""},
    {id : 4, title : "Last Chance", desc: "", link : "1919 E Camelback Rd, Phoenix, AZ 85016", date: ""},
  ]);

  const [popupShow, setPopupShow] = useState(false);

  //Modal Data
  const [newIdeaTitle, setNewIdeaTitle] = useState("");
  const [newIdeaDesc, setNewIdeaDesc] = useState("");
  const [newIdeaLink, setNewIdeaLink] = useState("");
  const [newIdeaDate, setNewIdeaDate] = useState("");
  
  const showPopup = () => { setPopupShow(true); };
  const hidePopup = () => setPopupShow(false);

  const makeNewTrip = () => {
    if (newIdeaTitle != "") {

      setIdeaList(arr => [...arr, 
        {id : arr.length + 1, 
          title: newIdeaTitle, 
          desc: newIdeaDesc, 
          link: newIdeaLink, 
          date: newIdeaDate}]);
      
      setNewIdeaTitle("");
      setNewIdeaDesc("");
      setNewIdeaLink("");
      setNewIdeaDate("");

      setPopupShow(false);
    }
  }

  const echo = () => {
    console.log("echo");
  }

  const [tripOptionsShow, setTripOptionsShow] = useState(false);

  const showTripOptions = () => { setTripOptionsShow(true) }
  const hideTripOptions = () => { setTripOptionsShow(false) }
  
  const launchSchedule = () => {
    setTripOptionsShow(false);
    navigation.push('Schedule', {name: route.params.name, ideas: ideaList});
  }

  const launchPackingChecklist = () => {
    setTripOptionsShow(false);
    navigation.push('PackingList', {name: route.params.name});
  }

  const launchTicketHolder = () => {
    setTripOptionsShow(false);
    navigation.push('TicketHolder', {name: route.params.name});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Banner showBack={true}/>

      <ScrollView>
        <View style={styles.nameBar}>
          <Text style={styles.tripName}>{"Plans for " + route.params.name}</Text>
          <View style={styles.moreIconHolder}>
            <TouchableOpacity onPress={showTripOptions}>
              <FontAwesome name='th' size={20} style={styles.icon}></FontAwesome>
            </TouchableOpacity>
            <Modal isVisible={tripOptionsShow} onBackdropPress={hideTripOptions} animationIn='fadeIn' animationOut='fadeOut'>
              <View style = {styles.modalMore}>
                <TouchableOpacity onPress={launchSchedule}>
                  <Text style={styles.tripOptionsText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={echo}>
                  <Text style={styles.tripOptionsText}>Suggestions</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={launchTicketHolder}>
                  <Text style={styles.tripOptionsText}>Flight Tickets</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={launchPackingChecklist}>
                  <Text style={styles.tripOptionsText}>Packing Checklist</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>
        <View testID="cardHolder" style= {styles.cardHolder}>
          {ideaList.map((idea) => {
              return <IdeaCard key={idea.id} title={idea.title} desc={idea.desc} link={idea.link} date={idea.date} onPress={() => console.log("will open editor, coming soon on VHS")}/>
          })}

          <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
              <View style={styles.modalAdd}>
                  <TextInput 
                    style={styles.inputTitle}
                    onChangeText={setNewIdeaTitle}
                    value={newIdeaTitle}
                    placeholder='new idea...'
                    placeholderTextColor={Colors.white}  
                    />
                  <TextInput 
                    style={styles.inputDesc}
                    onChangeText={setNewIdeaDesc}
                    value={newIdeaDesc}
                    placeholder='any details?'
                    multiline={true}
                    />
                  <TextInput 
                    style={styles.inputLink}
                    onChangeText={setNewIdeaLink}
                    value={newIdeaLink}
                    placeholder='any links?'
                    />
                  <View style={styles.dateHolder}>
                    <DatePicker
                      style={styles.inputDate}
                      date={newIdeaDate}
                      mode="date"
                      placeholder="Date"
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
                          marginLeft: 0,
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
                      onDateChange={(date) => {setNewIdeaDate(date.toString())}}
                    />
                    <TouchableOpacity style={styles.clearDate} onPress={() => setNewIdeaDate("")}>
                      <FontAwesome name='times' size={21} color={Colors.darkBackground} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.modalBtn} onPress={makeNewTrip}>
                    <Text style={styles.modalBtnText}>ADD IDEA</Text>
                  </TouchableOpacity>
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
  nameBar: {
    // width: '100%',
    display:'flex',
    flexDirection:'row',
    height: 50
  },
  moreIconHolder: {
    width: 30,
    height: 30,
    marginLeft: -30,

    borderRadius: 1000,
    borderWidth: 1,
    borderColor: Colors.transparent,
    backgroundColor: Colors.transparent,
    alignSelf:'center',
    
    marginRight:10
  },
  modalMore: {
    position: 'absolute',
    top: 45,
    right: 0,
    backgroundColor:Colors.white,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 5,
  },
  modalAdd: {
    backgroundColor: Colors.white, 

    borderRadius: 10, 
    flex: 1,

    marginHorizontal: 20,
    maxHeight: 275,
    flexDirection: 'column',
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
  inputDesc: {
    marginLeft: 12,
    height: 70,
    textAlignVertical: 'top',
  },
  inputLink: {
    marginLeft: 12,
  },
  inputDate: {
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
    marginVertical: 10,
  },
  dateHolder: {
    marginLeft: 12,
    marginVertical: 10,
    flex: 1,
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    alignSelf:'center',
    lineHeight: 30,
    height: 30,
  },
  tripName: {
    flex:1,
    flexBasis:'auto',
    textAlign:'center',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    alignSelf:'center',
    color: 'black',
    marginRight: -20,
    // marginLeft: 22,
  },
  cardHolder: {
    marginHorizontal: '5%',
    backgroundColor: Colors.pageBackground,
    paddingBottom: Math.round(Dimensions.get('window').height - 200),
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  tripOptionsText: {
    marginLeft: 5,
    marginVertical: 7, 
    fontSize: 16,
  }
});
