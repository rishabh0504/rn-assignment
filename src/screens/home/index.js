import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Category from '../../components/category';
import Products from '../../components/product';

function Home(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Category />
            <Products />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default Home