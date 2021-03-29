import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const user = {
    id: 1,
    email: 'John@gmail.com',
    username: 'johnd',
    password: 'm38rmF$',
    name: {
        firstname: 'John',
        lastname: 'Doe'
    },
    address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
            lat: '-37.3159',
            long: '81.1496'
        }
    },
    phone: '1-570-236-7033'
}

function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{user.name.firstname} {user.name.lastname}</Text>
                </View>
            </View>
            <View style={styles.userDetail}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 'auto',
        height: 150,
        marginTop: 20
    },
    avatar: {
        backgroundColor: '#D7D7D7',
        height: 150,
        width: 150,
        borderRadius: 150 / 2,
        justifyContent: 'center',
    },
    userDetail: {
        backgroundColor: 'green',
        flexDirection: 'row',
        height: 200,
        marginTop: 20
    },
    avatarText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default Profile
