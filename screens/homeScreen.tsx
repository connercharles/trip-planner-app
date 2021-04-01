import * as React from 'react';
import {useState} from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Button, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import AddButton from '../components/AddButton';
import TripCard from '../components/TripCard';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import { TextInput } from 'react-native-gesture-handler';


export default function HomeScreen({ navigation }: { navigation: any }) {

  const [tripList, setTripList] = useState([]);

  React.useEffect(() => {
    //setTripList(["arizona", "colorado", "utah"])
  })

  const [popupShow, setPopupShow] = useState(false);
  const [newTripText, setNewTripText] = useState("");

  const showPopup = () => {
    console.log("Height" + Dimensions.get('window').height);
    console.log("Wid" + Dimensions.get('window').width);
    setPopupShow(true)
  };
  const hidePopup = () => setPopupShow(false);

  const makeNewTrip = () => {
    if (newTripText != "") {
      console.log(newTripText);
      setNewTripText("");
      setPopupShow(false);
    }
  }

  return (
    <View style={styles.container}>
      <Banner showBack={false}/>
      <View testID="cardHolder" style= {styles.cardHolder}>
        <TripCard title="test" dates="Mar 3-Mar 7" onPress={() => navigation.push('Trip')}/>
        <TripCard title="test" dates="Mar 3-Mar 7" onPress={() => navigation.push('Trip')}/>
        <TripCard title="test" dates="Mar 3-Mar 7" onPress={() => navigation.push('Trip')}/>
        <TripCard title="test" dates="Mar 3-Mar 7" onPress={() => navigation.push('Trip')}/>
        <TripCard title="test" dates="Mar 3-Mar 7" onPress={() => navigation.push('Trip')}/>
        
        <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
          <View style={{backgroundColor:Colors.white, marginVertical:50 ,marginHorizontal:10, padding:40, borderRadius:10, flex:1}}>
            <Text style={{ fontSize: 40 }}>New Trip</Text>
            <View style={{justifyContent:'center', marginTop:50}}>
              <TextInput 
                style={styles.input}
                onChangeText={setNewTripText}
                value={newTripText}
                />
            </View>
            <View style={{marginTop:100}}>
              <Button title={"Enter"} onPress={makeNewTrip}/>
            </View>
          </View>
        </Modal>
      </View>
      <AddButton onPress={showPopup}/>
    </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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

