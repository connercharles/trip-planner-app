import { ScrollView } from "react-native-gesture-handler";
import DraggableFlatList, { RenderItemParams, } from "react-native-draggable-flatlist";
import React, { useState, useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function Calendar({ data, startDate, endDate }: 
        { data: Array<any>, startDate?: string, endDate?: string }) {
    const renderItem = useCallback(
        ({ item, drag }: RenderItemParams<Item>) => {
          return (
            <TouchableOpacity style={styles.item} onLongPress={drag}>
              <Text style={styles.itemText}>
                {item.title}
              </Text>
              <Text style={styles.itemText}>
                {(item.date !== '') ?
                  item.date.substring(10) : ''
                }
              </Text>
            </TouchableOpacity>
          );
        },
        []
    );

    const filterData = () => {
      console.log(data);
      let updatedData: Item[] = [];
      data.forEach((item) => {
        if (item.date === '' || (startDate !== undefined && item.date.includes(startDate))) {
          updatedData.push(item);
        }
      });
      return updatedData;
    }

    const [currentData, setCurrentData] = useState(filterData());

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.date}>
                {startDate}
            </Text>
            <DraggableFlatList
            data={currentData}
            renderItem={renderItem}
            keyExtractor={(item) => `draggable-item-${item.id}`}
            onDragEnd={({ data }) => setCurrentData(data)}
            />
        </ScrollView>
    );
}
  
type Item = {
    id: string;
    title: string;
    desc: string;
    link: string;
    date: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '5%',
  },
  date: {
    height: 50,
    backgroundColor: Colors.lightBlue,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 25,
    color: Colors.white,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  item: {
    height: 50,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: 'space-between',
    
    borderColor: Colors.pageBackground,
    borderBottomWidth: 0,
    borderTopWidth: 1,

    display: 'flex',
    flexDirection: 'row',
  },
  itemText: {
    marginHorizontal: 10,
    color: Colors.black,
  }
});
  