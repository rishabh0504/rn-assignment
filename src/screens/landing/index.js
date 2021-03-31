import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import MyTabs from '../../tab-navigation'
import { NavigationContainer } from '@react-navigation/native';

function Landing(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: '../../' }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
})

export default Landing