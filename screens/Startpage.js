import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Pressable, Image } from 'react-native';
import Colors from '../constants/Colors';

// Firebase
import { authentication } from '../firebase'
import { signOut } from '@firebase/auth'


export default function Startseite({navigation}){

    const onPressHandlerPackliste = () => {
      navigation.navigate("Packliste");
    }
  
    const onPressHandlerUpdates = () => {
      navigation.navigate("Updates");
    }

    const handleSignOut = () => {
      signOut(authentication)
      .then(() => {
          navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  
    return(
      <SafeAreaView style={styles.container}>
  
      <View style={styles.body}>
  
        <View style={styles.containerBild}> 
          <Image 
            style={styles.bild}
            source={require('../assets/flugzeugFenster.jpg')} />
        </View>

        <View style={styles.containerPagesButtons}>
          <Pressable 
            onPress={onPressHandlerPackliste}
            style={({ pressed }) => [
              styles.pagesButtons,
              { opacity: pressed ? 0.5 : 1 },
            ]}>
              <View>
                <Text style={styles.textPagesButtons}>Packliste</Text>
              </View>
          </Pressable>
  
          <Pressable 
            onPress={onPressHandlerUpdates}
            style={({ pressed }) => [
              styles.pagesButtons,
              { opacity: pressed ? 0.5 : 1 },
            ]}>
              <View>
                <Text style={styles.textPagesButtons}>App Updates</Text>
              </View>
          </Pressable>
        </View>

        <View style={styles.trennlinie}></View>

        <View style={styles.containerEmail}>
          <Text style={styles.textEmail}>Angemeldet als:   {authentication.currentUser?.email}</Text>
        </View>

        <View style={styles.containerLogoutButton}>
          <Pressable 
            onPress={handleSignOut}
            style={({ pressed }) => [
              styles.logoutButton,
              { opacity: pressed ? 0.5 : 1 }]}>
              <View>
                <Text style={styles.textLogoutButton}>Logout</Text>
              </View>
          </Pressable>
        </View>

      </View>
  
    </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }, 
    header: {
      height: "10%",
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "grey",
    }, 
    textHeader: {
      color: "black",
      fontSize: 25,
      fontFamily: "sans-serif-medium",
    },
    body: {
      width: "100%",
      height: "100%",
      padding: 10,
      backgroundColor: Colors.bgColor,
    },
    containerBild:{
      maxWidth: "100%",
      height: "60%",
    },
    bild: {
      width: "100%",
      height: "100%",
    },
    containerPagesButtons: {
      width: "100%",
      height: "20%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    pagesButtons: {
      width: "40%",
      height: "60%",
      backgroundColor: "white",
      borderRadius: 15,
      borderColor: "black",
      borderWidth: 3,
      alignItems: "center",
      justifyContent: "center",
    },
    textPagesButtons: {
      fontSize: 20,
      fontFamily: "sans-serif-medium",
      color: Colors.darkGray,
    },
    containerLogoutButton: {
      width: "100%",
      height: "14%",
      justifyContent: "center",
      alignItems: "center",
    },
    logoutButton: {
      height: "60%",
      width: "40%",
      backgroundColor: Colors.lightred,
      borderRadius: 15,
      borderColor: "black",
      borderWidth: 3,
      alignItems: "center",
      justifyContent: "center",
    },
    textLogoutButton: {
      color: "black",
      fontSize: 20,
      fontFamily: "sans-serif-medium",
    },
    containerEmail: {
      height: "5.5%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    textEmail: {
      fontSize: 15,
      color: "white",
      fontFamily: "sans-serif-medium",
    },
    trennlinie: {
      width: "100%",
      height: "0.5%",
      backgroundColor: "black",
    },
  });