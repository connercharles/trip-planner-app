import { Dimensions, StyleSheet, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import AddButton from '../components/AddButton';
import TripCard from '../components/TripCard';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import Popup from '../components/Popup';
import React, { useState } from 'react';


export default function TripScreen({ navigation }: { navigation: any }) {
  const [popupShow, setPopupShow] = useState(false);

  const showPopup = () => {
    console.log("Height" + Dimensions.get('window').height);
    console.log("Wid" + Dimensions.get('window').width);
    setPopupShow(true);
  };
  const hidePopup = () => setPopupShow(false);


  return (
    <View style={styles.container}>
      <Banner showBack={true}/>
      {/* <TripCard title="test" dates="Mar 3-Mar 7"/> */}
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Popup popupShow={popupShow}/>
      <AddButton onPress={showPopup}/>
    </View>
  );
}


{/* <View style={styles.container}>
<Banner/>
<Text style={styles.title}>Trippy</Text>
<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
<TripCard title="test" dates="Mar 3-Mar 7"/>
<AddButton/>
<Popup></Popup>
</View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
