import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Loading() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/loading.gif')} style={styles.image}>
            </Image>
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
    image: {
        flex: 1,
        width: 200,
        height: 200
    }
})

export default Loading;
