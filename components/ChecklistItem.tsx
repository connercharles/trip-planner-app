import {StyleSheet, Text, View} from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import Colors from '../constants/Colors';
import { useState } from 'react';
import React from 'react';

export default function ChecklistItem({itemText}: {itemText: string}) {

    const [isChecked, setIsChecked] = useState(false);

    const toggleChecked = () => {
        if (isChecked) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    }

    return (

        <View style={styles.banner}>
            <Checkbox
                disabled={false}
                value={isChecked}
                onValueChange={toggleChecked}
            />
            <Text>{itemText}</Text>
        </View>

    )


}

const styles = StyleSheet.create({
    banner: {
      borderRadius: 10,
      width: '100%',
      display:'flex',
      flexDirection:'row',
      height: 50,
      alignItems:'center'
      },
      textStyle: {
          fontSize: 15,
          marginRight: 20,
          textAlign:'center',
      }
    });