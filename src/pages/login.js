import React, { useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';



export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if( user) {
                navigation.navigate('Main', { user })
            }
        })
    }, []);

    async function handleLogin() {
        const response = await api.post('/devs', {username: user});

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);
        
        navigation.navigate('Main', { user: _id });

    }

    return (
        <View style={style.container}>
            <Image source={logo} />
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Digite seu usuário no github" 
            placeholderTextColor="#999"
            style={style.input}
            value={user}
            onChangeText={setUser}
            />
            <TouchableOpacity onPress={handleLogin} style={style.button}>
                <Text style={style.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
})