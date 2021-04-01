import Modal from 'react-native-modal';
import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState } from 'react';

// class Popup extends React.Component {
// function Popup() {
const Popup = (props: { showPopup: boolean | undefined; }) => {
    // constructor(props){
    //     super(props);
    
    //     // this.toggleModal = this.toggleModal.bind(this);
    // }

    // const [showPopup, setShowPopup] = props.showPopup;
  
    // const toggleModal = () => {
    //     console.log(this.props);
    //     this.setState({showPopup: true});
    //   };

    // render() {
        return (
            <View>
                {/* <Button title="Show modal" onPress={toggleModal} /> */}
    
                <Modal isVisible={props.showPopup}>
                    <View style={{flex: 1}}>
                    <Text>Hello!</Text>
    
                    {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                    </View>
                </Modal>
            </View>
        );
    // }
}

export default Popup;