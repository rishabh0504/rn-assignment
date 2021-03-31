import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function NotFound() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nothing found</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default NotFound