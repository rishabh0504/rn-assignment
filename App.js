import React, { useEffect } from 'react'
import AppStackNavigator from './src/stack-navigation'
import { Linking } from 'react-native';
// import { requestNotifications } from 'react-native-permissions';

export default function App() {


  useEffect(() => {


    // Linking.openSettings();
    // This should be done with android emulat

    // requestNotifications(['alert', 'sound']).then(({ status, settings }) => {

    // });

  }, [])

  // const { status } = Permissions.getAsync(Permissions.NOTIFICATIONS);
  // if (status !== 'granted') {
  //   alert('Hey! You might want to enable notifications for my app, they are good.');
  // }

  return <AppStackNavigator />
}