import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';


import Colors from '../constants/Colors';
import Popup from './Popup';

export default function AddButton(memoizedCallback: ((event: GestureResponderEvent) => void) | undefined) {

  return (
    <TouchableOpacity onPress={memoizedCallback} style={styles.button}>
        <Text style={styles.text}>
          +
        </Text>
    </TouchableOpacity>
  );
}

  //   this.toggleModal = this.toggleModal.bind(this);
  // }

  // const [showPopup, setShowPopup] = useState(props.showPopup);
  // const {showPopup} = props;
  
  // const toggleModal = () => {
  //     console.log(props);
  //     // setShowPopup(!showPopup);
  //     props.showPopup = !props.showPopup;
  // };

  // render() {
  //   return (
  //     <FAB buttonColor="red" iconTextColor="#FFFFFF" 
  //           onClickAction={() => {console.log("FAB pressed")}} 
  //           visible={true} />
            
  //     // <TouchableOpacity onPress={toggleModal} style={styles.button}>

  //     //     <Text style={styles.text}>
  //     //       +
  //     //     </Text>
  //     // </TouchableOpacity>
  //   );
  // }
  
  // openPopup = () => {
  //   this.setState({ showPopup: true });
    
  //   // WebBrowser.openBrowserAsync(
  //     //   'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  //     // );     
  //   }

// }
    
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.mainColor,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        textAlign: 'center',
      },
    text: {
      color: Colors.white,
      fontSize: 32,
      height: 60,
      lineHeight: 50
    }
  });

  // export default AddButton;