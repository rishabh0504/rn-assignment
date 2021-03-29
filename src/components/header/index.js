import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Header(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <View flex={4}>
                <Text>Shophere</Text>
            </View>
            <View flex={4} style={styles.cartStyle}>
                <TouchableOpacity onPress={() => { navigation.navigate('Cart') }}>
                    <Text>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    cartStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'red'
    }
})

export default Header;
