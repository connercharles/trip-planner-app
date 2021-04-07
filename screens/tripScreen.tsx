import { ScrollView, TextInput, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
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
    {id : 1, title : "Have Fun!", desc: "", link : "2255 N University Pkwy, Provo, UT 84604", date: "Mar 7"},
    {id : 2, title : "Party Hard", desc: "Bring a phone charger", link : "", date: ""},
    {id : 3, title : "Debug later", desc: "If I'm bored.", link : "", date: ""},
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
          <Text style={styles.tripName}>{route.params.name}</Text>
          <View style={styles.ellipsisHolder}>
            <TouchableOpacity onPress={showTripOptions}>
              <FontAwesome name='ellipsis-v' size={23} style={styles.icon}></FontAwesome>
            </TouchableOpacity>
            <Modal isVisible={tripOptionsShow} onBackdropPress={hideTripOptions} animationIn='fadeIn' animationOut='fadeOut'>
              <View style = {styles.modalMore}>
                <TouchableOpacity onPress={echo}>
                  <Text style={{marginLeft: 5, marginTop: 10, fontSize:16}}>Schedule</Text>
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
  ellipsisHolder: {
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
    backgroundColor:Colors.white,
    // marginTop: 20,
    marginHorizontal: 2,
    marginLeft: 200,
    marginBottom: 500,
    borderRadius: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    // flex:1,
    justifyContent: 'space-between',
  },
  modalAdd: {
    backgroundColor: Colors.white, 

    borderRadius: 10, 
    flex: 1,

    marginHorizontal: 20,
    maxHeight: 275,
    flexDirection: 'column',
    // justifyContent: 'space-between',
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  tripOptionsText: {
    marginLeft: 5,
    marginTop: 15, 
    fontSize: 16
  }
});
