import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';


export default function Banner({ showBack }: { showBack: boolean }) {
  const navigation = useNavigation();

  let backBtn;
  if(showBack) {
    backBtn = <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <FontAwesome name='arrow-left' size={21} color={Colors.white} />
              </TouchableOpacity>
  }

  return (
    <View style={styles.banner}>
          {backBtn}
          <Text style={styles.logo}>
            Trippy 
          </Text>
          <View style={styles.circle}>
            <FontAwesome name='user' size={21} color={Colors.secColor} style={styles.icon} />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
    banner: {
      backgroundColor: Colors.mainColor,
      width: '100%',
      display:'flex',
      flexDirection:'row',
      height: 50,
      },
    logo: {
      flex:1,
      flexBasis:'auto',
      textAlign:'center',
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'allan',
      fontStyle: 'italic',
      letterSpacing: 1,
      color: Colors.white,
      alignSelf:'center'
    },
    circle: {
      width: 30,
      height: 30,
      marginLeft: -30,
      borderRadius: 1000,
      borderWidth: 1,
      borderColor: Colors.white,
      backgroundColor: Colors.white,
      alignSelf:'center',
      marginRight:10
    },
    icon: {
      alignSelf:'center',
      lineHeight: 30,
      height: 30
    },
    back: {
      paddingLeft:10,
      alignSelf:'center'
    }
});
