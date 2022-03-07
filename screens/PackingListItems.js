import React, {useState, useLayoutEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import PackItems from '../components/PackingItems';


const renderAddListIcon = (addItem) => {
    return(
      <TouchableOpacity onPress={() => addItem({text: "", isChecked: false, isNewItem: true})}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    )
  }

export default ({navigation}) => {
    const [packItems, setpackItems] = useState([])

    // Add Item
    const addItemToLists = (item) => {
        packItems.push(item)
        setpackItems([...packItems])
    }

    // Delete Item 
    const removeItemFromList = (index) => {
        packItems.splice(index, 1)
        setpackItems([...packItems])
    }

    // Update Item
    const updateItem = (index, item) => {
        packItems[index] = item
        setpackItems([...packItems])
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => renderAddListIcon(addItemToLists)
        })
    })

    return(
        <View style={StyleSheet.container}>
            <FlatList
                data={packItems}
                renderItem={({item: {text, isChecked, isNewItem}, index}) => {
                    return <PackItems 
                        text={text} 
                        isChecked={isChecked} 
                        isNewItem={isNewItem}
                        onChecked={() => {
                            const toDoItem = packItems[index]
                            toDoItem.isChecked = !isChecked
                            updateItem(index, toDoItem)
                        }}
                        onChangeText={(newText) => {
                            const toDoItem = packItems[index]
                            toDoItem.text = newText
                            updateItem(index, toDoItem)
                        }}
                        onDelete={() => {
                            removeItemFromList(index)
                        }}
                    />
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon : {
        padding: 5,
        fontSize: 35,
        color: "black"
    }
})