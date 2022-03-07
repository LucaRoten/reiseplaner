import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import Colors from '../constants/Colors';


// Packing list Item
const ListButton = ({title, color, onPress, onDelete, onOptions}) => {
  return(
      <TouchableOpacity 
        style={[styles.itemContainer, {backgroundColor: color}]}
        onPress={onPress}
      >
        <View><Text style={styles.itemTitel}>{title}</Text></View>
        <View style={{flexDirection:"row", paddingRight: 5}}>
          <TouchableOpacity onPress={onOptions}>
            <Ionicons name="options-outline" size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Ionicons name="trash-outline" size={24} color="black"/>
          </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}


// Add Items to list
const renderAddListIcon = (navigation, addItemToLists) => {
  return(
    <TouchableOpacity onPress={() => navigation.navigate("EditPackingList", {saveChanges: addItemToLists})}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  )
}


export default function Packliste({navigation}){

  // Default Items
  const [lists, setLists] = useState([
    {title: "Strand-Urlaub", color: Colors.orange}, 
    {title: "Ski-Urlaub", color: Colors.blue}
  ])

  // Add Item
  const addItemToLists = (item) => {
    lists.push(item)
    setLists([...lists])
  }

  // Delete Item
  const removeItemFromList = (index) => {
    lists.splice(index, 1)
    setLists([...lists])
  }

  // Update Item
  const updateItemFromList = (index, item) => {
    lists[index] = item
    setLists([...lists])
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddListIcon(navigation,addItemToLists)
    })
  })

  return(
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={lists}
        renderItem={({item: {title, color}, index}) => {
          return(
            <ListButton 
              title={title} 
              color={color} 
              navigation={navigation}
              onPress={() => {navigation.navigate("PackingListItems", {title, color})}}
              onOptions={() => {
                navigation.navigate(
                  "EditPackingList", 
                  {
                    title, 
                    color, 
                    saveChanges: (item) => updateItemFromList(index, item)
                  }
                )
              }}
              onDelete={() => removeItemFromList(index)}  
            />
          )
        }}
      />
  </SafeAreaView>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.bgColor,
      paddingTop: 10
    }, 
    itemContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 100,
      borderRadius: 20,
      marginHorizontal: 15,
      marginVertical: 10,
      padding: 15,
    },
    itemTitel: {
      fontSize: 24,
      padding: 5,
      color: "black",
    },
    icon: {
      padding: 5,
      fontSize: 35,
      paddingRight: 30,
    },
  });