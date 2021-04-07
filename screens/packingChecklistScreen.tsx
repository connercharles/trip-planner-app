import * as React from 'react';

import Banner from '../components/Banner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import ChecklistItem from '../components/ChecklistItem';
import AddButton from '../components/AddButton';
import { useState } from 'react';
import Modal from 'react-native-modal';


export default function PackingChecklistScreen({navigation, route} : {navigation: any, route: any}) {

    const [title, setTitle] = useState("trip");

    const [items, setItems] = useState([
        {id : 1, itemText : "Toothbrush"},
        {id : 2, itemText : "Charger"},
        {id : 3, itemText : "Shampoo"},
        {id : 4, itemText : "Clothes"}
    ]);

    const [popupShow, setPopupShow] = useState(false);
    const showPopup = () => setPopupShow(true);
    const hidePopup = () => setPopupShow(false);

    //Modal Data
    const [newItemText, setNewItemText] = useState("");

    const addNewItem = () => {
        if (newItemText != "") {
            setItems(arr => [...arr, {id: arr.length + 1, itemText: newItemText}]);
            setNewItemText("");

            setPopupShow(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Banner showBack= {true}/>
            <ScrollView>
              <View style={styles.nameBar}>
                  <Text style={styles.tripName}>{route.params.name}</Text>
              </View>
              <View style={styles.textContainer}>
                  {items.map((item) => {
                      return <ChecklistItem key={item.id} itemText={item.itemText}></ChecklistItem>
                  })}
              </View>
              <Modal isVisible={popupShow} onBackdropPress={hidePopup}>
              <View style={styles.modalView}>
                <TextInput 
                  style={styles.input}
                  onChangeText={setNewItemText}
                  value={newItemText}
                  placeholder='new item...'
                  placeholderTextColor={Colors.white}  
                  />
                <TouchableOpacity style={styles.modalBtn} onPress={addNewItem}>
                  <Text style={styles.modalBtnText}>ADD ITEM</Text>
                </TouchableOpacity>
                  {/* <View style={{marginTop:100}}>
                    <Button title={"Enter"} onPress={addNewItem}/>
                  </View> */}
                </View>
              </Modal>
            </ScrollView>
            <AddButton onPress={showPopup}/>
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
        marginHorizontal: '10%',
        backgroundColor: Colors.pageBackground,
    },
    input: {
      height: 50,
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
    tripName: {
      flex:1,
      flexBasis:'auto',
      textAlign:'center',
      fontSize: 25,
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
    },
    modalView: {
      backgroundColor: Colors.white, 
      borderRadius: 10, 
      flex: 1,
      marginHorizontal: 20,
      maxHeight: 100,
      flexDirection: 'column',
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
});