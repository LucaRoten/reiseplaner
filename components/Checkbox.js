import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default ({isChecked, onChecked}) => {
    return(
        <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
            <Text style={{color: "grey"}}>{isChecked ? "✓" : "" }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        margin: 5,
        backgroundColor: "white",
        color: "grey",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    }
})