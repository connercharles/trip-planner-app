import { Dimensions, StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AddButton from '../components/AddButton';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import Popup from '../components/Popup';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import IdeaCard from '../components/IdeaCard';


export default function TripScreen() {
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
  

  const showPopup = () => {
    console.log("Height" + Dimensions.get('window').height);
    console.log("Wid" + Dimensions.get('window').width);
    setPopupShow(true);
  };
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


  return (
    <SafeAreaView style={styles.container}>
      <Banner showBack={true}/>

      {/* <Popup popupShow={popupShow}/> */}
      <View testID="cardHolder" style= {styles.cardHolder}>
        {ideaList.map((idea) => {
            return <IdeaCard key={idea.id} title={idea.title} desc={idea.desc} link={idea.link} date={idea.date} onPress={() => console.log("will open editor, coming soon on VHS")}/>
        })}

        <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
            <View style={{backgroundColor:Colors.white, marginVertical:50 ,marginHorizontal:10, padding:40, borderRadius:10, flex:1}}>
              <Text style={{ fontSize: 40 }}>New Idea</Text>
              <View style={{justifyContent:'center', marginTop:50}}>
                <TextInput 
                  style={styles.input}
                  onChangeText={setNewIdeaTitle}
                  value={newIdeaTitle}
                  />
                <TextInput 
                  style={styles.input}
                  onChangeText={setNewIdeaDesc}
                  value={newIdeaDesc}
                  />
                <TextInput 
                  style={styles.input}
                  onChangeText={setNewIdeaLink}
                  value={newIdeaLink}
                  />
                <DatePicker
                  style={{marginTop: 20, width: 200}}
                  date={newIdeaDate}
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
                  onDateChange={(date) => {setNewIdeaDate(date.toString())}}
                />
              </View>
              <View style={{marginTop:100}}>
                <Button title={"Enter"} onPress={makeNewTrip}/>
              </View>
            </View>
          </Modal>
      </View>
      <AddButton onPress={showPopup}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  cardHolder: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
    marginHorizontal: '5%',
    backgroundColor: Colors.pageBackground,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});
