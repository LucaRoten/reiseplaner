import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

// Colors
import Colors from '../constants/Colors';

// Firebase
import { authentication } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';


const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('startseite')
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(authentication ,email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registred with:', user.email);
        })
        .catch(error => alert(error.code))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.code))
    }

    return (

        

        <View
            style={styles.containerLogin}
            behavior='padding'>

        <View style={styles.containerTitle}>
            <Text style={styles.title}>Reiseplaner</Text>
        </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input} />

                <TextInput
                    placeholder='Passwort'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress= {handleLogin}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Anmelden</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress= {handleSignUp}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Registrieren</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bgColor,
    },
    containerTitle: {
        paddingBottom: 50,
    },
    title: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold"
    },
    inputContainer: {
        width: '80%',
    },  
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },             
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})