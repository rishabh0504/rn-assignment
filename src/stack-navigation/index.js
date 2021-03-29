import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import MyTabs from '../tab-navigation';
import Header from '../components/header';


const Stack = createStackNavigator();

function AppStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Landing'>
                <Stack.Screen name='Landing' component={MyTabs} options={{ headerTitle: props => <Header {...props} /> }} />
                <Stack.Screen name='Profile' component={Profile} options={{ title: 'Profile Screen' }} />
                <Stack.Screen name='Cart' component={Cart} options={{ title: 'Cart Screen' }} />
            </Stack.Navigator>
            {/* <Tab.Navigator
                tabBarOptions={
                    {
                        style: {
                            height: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',

                        },
                        activeTintColor: '#845EC2',
                        labelStyle: {
                            fontSize: 15,
                            margin: 'auto'
                        },
                        tabStyle: {
                            justifyContent: 'center'
                        },
                        lazy: false
                    }
                }
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Cart" component={Cart} />

            </Tab.Navigator> */}
        </NavigationContainer>
    )
}

export default AppStackNavigator;
