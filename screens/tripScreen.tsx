import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AddButton from '../components/AddButton';
import TripCard from '../components/TripCard';
import Colors from '../constants/Colors';
import Banner from '../components/Banner';
import Popup from '../components/Popup';


class TripScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Banner showBack={true}/>
        {/* <TripCard title="test" dates="Mar 3-Mar 7"/> */}
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    );
  }
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

export default TripScreen;