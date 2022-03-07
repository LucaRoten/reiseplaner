import React from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';
import Colors from '../constants/Colors';


export default function Updates(){

    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Neu:</Text>
          <Text style={styles.text1}>- Nach dem öffnen der App ist eine</Text>
          <Text style={styles.text2}>  Registrierung/Anmeldung notwendig.</Text>

          <Text style={styles.title}>Bald verfügbar:</Text>
          <Text style={styles.text1}>- Interne Kamera kann auf der Startseite durch</Text>
          <Text style={styles.text2}>  einen Button geöffnet werden.</Text>
          <Text style={styles.text1}>- Einträge in der Packliste werden auf Firestorage</Text>
          <Text style={styles.text2}>  unter dem angemeldeten Benutzer gespeichert.</Text>
          <Text style={styles.text1}>- Bild auf der Startseite kann aus der Galerie</Text>
          <Text style={styles.text2}>  ausgewählt werden.</Text>
          <Text style={styles.text1}>- Verbesserte Fehlermeldung bei inkorrekter</Text>
          <Text style={styles.text2}>  Andmeldung/Registrierung.</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.bgColor,
    }, 
    title: {
      color: "white",
      fontSize: 20,
      paddingTop: 15,
      paddingLeft: 15,
      paddingBottom: 5,
    },
    text1: {
      color: "white",
      paddingLeft: 15,
      paddingTop: 5,
    },
    text2: {
      color: "white",
      paddingLeft: 15,
      paddingTop: 5,
      paddingBottom: 10,
    },  
  });