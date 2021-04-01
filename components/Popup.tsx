import Modal from 'react-native-modal';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Colors from '../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';

// class Popup extends React.Component {
// function Popup() {
export default function Popup({ popupShow }: { popupShow: boolean }) {

// const Popup = (props: { showPopup: boolean | undefined; }) => {
    // constructor(props){
    //     super(props);
    
    //     // this.toggleModal = this.toggleModal.bind(this);
    // }

    // const [showPopup, setShowPopup] = props.showPopup;
  
    // const toggleModal = () => {
    //     console.log(this.props);
    //     this.setState({showPopup: true});
    //   };

    // const [popupShow, setPopupShow] = useState(false);
    const [newTripText, setNewTripText] = useState("");
  
    const showPopup = () => {
    //   console.log("Height" + Dimensions.get('window').height);
    //   console.log("Wid" + Dimensions.get('window').width);
    //   setPopupShow(true);
      popupShow = true;
    };
    // const hidePopup = () => setPopupShow(false);
    const hidePopup = () => popupShow = false;
  
    const makeNewTrip = () => {
      if (newTripText != "") {
        console.log(newTripText);
        setNewTripText("");
        popupShow = false;
      }
    }

    // render() {
    return (
        <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
        <View style={{backgroundColor:Colors.white, marginVertical:50 ,marginHorizontal:10, padding:40, borderRadius:10, flex:1}}>
            <Text style= {{ fontSize: 40 }} >New Trip</Text>
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
    );
    // }
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
    button: {
      position:'absolute',
      bottom:20,
      right:20,
      backgroundColor: Colors.mainColor,
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: 60,
      height: 60,
      justifyContent:'center',
      alignItems: 'center',
      borderWidth: 0,
    },
    text: {
      color: Colors.white,
      fontSize: 32,
      height: 60,
      lineHeight: 50
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    }
});  
