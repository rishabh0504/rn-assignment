import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import { I18nManager } from "react-native";
import RNRestart from 'react-native-restart'; // Import package from node modules

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

const openSetting = () => {
    // For Expo only openSetting works, none of the native modules seems to be working on android for expo, It's known bugPropTypes.any,
    // Bug id : https://github.com/zoontek/react-native-permissions/issues/399
    Linking.openSettings();
}

const changeDirection = () => {
    // Because of the Expo rtl change will collapse but once we reopen the app again rtl impact will be there.
    // Text rtl and ltr is done by IOS and android itself on the basis of text.
    if (!I18nManager.isRTL) {
        I18nManager.forceRTL(true);
        RNRestart.Restart();
    } else {
        I18nManager.forceRTL(false);
        RNRestart.Restart();
    }
}

function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{user.name.firstname} {user.name.lastname}</Text>
                </View>
                <View style={styles.userDetail}>
                    <Text style={styles.label}>Full name : </Text>
                    <Text> {user.name.firstname} {user.name.lastname}</Text>
                    <Text style={styles.label}>Email : </Text>
                    <Text> {user.email}</Text>
                    <Text style={styles.label}>Phone :  </Text>
                    <Text>{user.phone}</Text>
                </View>
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.label}>Address : </Text>
                <Text styles={styles.addressText}>No:{user.address.number}, Street :{user.address.street}, City: {user.address.city}, Zipcode: {user.address.zipcode}</Text>
            </View>
            <View style={styles.permissionContainer}>
                <TouchableOpacity onPress={changeDirection} >
                    <Text style={styles.button}>Change Direction</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openSetting}>
                    <Text style={styles.button}>Enable Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openSetting}>
                    <Text style={styles.button}>Enable Location</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openSetting}>
                    <Text style={styles.button}>Enable Adress</Text>
                </TouchableOpacity>
            </View >

        </View >
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
        flexDirection: 'column',
        marginLeft: 50,
        marginRight: 50,
    },
    avatarText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
    addressContainer: {
        flex: 1,
        flexDirection: 'column',
        maxHeight: 100
    },
    permissionContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        textAlign: 'center',
        backgroundColor: '#FDAD2F',
        padding: 8,
        marginLeft: 100,
        marginRight: 100,
        marginTop: 2,
        marginBottom: 2
    },
    addressText: {
        margin: 20
    }
});

export default Profile
