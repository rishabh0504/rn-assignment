import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={
            {
                style: {
                    justifyContent: 'center'
                },
                labelStyle: {
                    fontSize: 12
                },
                tabStyle: {
                    justifyContent: 'center'
                }
            }
        }>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator >
    );
}

export default MyTabs
