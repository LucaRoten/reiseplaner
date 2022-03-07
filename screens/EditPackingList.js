import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

import Colors from '../constants/Colors';
import ColorSelector from '../components/ColorSelector';


const colorList = [
    "green",
    "blue",
    "teal",
    "olive",
    "yellow",
    "orange",
    "red",
    "pink",
    "purple",
    "blueGray"
]


export default ({navigation, route}) => {

    const [title, setTitle] = useState(route.params.title || "")
    const [color, setColor] = useState(route.params.color || Colors.green)
    const [isValid, setValidity] = useState(true)

    return(
        <View style={styles.container}>
            <View>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.labelName}>Titel der Liste:</Text>
                    {!isValid && 
                    <Text
                        style={{marginLeft: 10, color: Colors.red, fontSize: 13, marginTop: 10}}
                    >
                        * Titel der Liste darf nicht leer sein!
                    </Text>}
                </View>
                <TextInput
                        underlineColorAndroid={"transparent"}
                        selectionColor={"transparent"}
                        autoFocus = {true}
                        value={title}
                        onChangeText = {(text) => {
                            setTitle(text)
                            setValidity(true)
                        }}
                        placeholder = {"Titel"}
                        maxLength = {30}
                        style = {[styles.input, {outline: "none"}]}
                    /> 
                <Text style={styles.labelFarbe}>Hintergrundfarbe auswählen:</Text>
                <ColorSelector
                    onSelect={(color) => {
                        setColor(color)
                        navigation.dispatch(CommonActions.setParams({color}))
                    }}
                    selectedColor={color}
                    colorOptions={colorList}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={() => {
                if (title.length > 1) {
                    route.params.saveChanges({title, color})
                    navigation.dispatch(CommonActions.goBack())
                } else {
                    setValidity(false)
                }
            }}>
                <Text 
                    style={{color: "white", fontSize: 24, fontWeight: "bold"}}
                >
                    Speichern
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 5,
        justifyContent: "space-between",
    },
    input: {
        color: Colors.darkGray,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 30,
        fontSize: 22,
    },
    saveButton: {
        borderRadius: 25,
        backgroundColor: Colors.darkGray,
        height: 48,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    labelName: {
        color: Colors.black,
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10,
    },
    labelFarbe: {
        color: Colors.black,
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 30,
    },
});