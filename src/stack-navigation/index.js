import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import BottomTabs from '../tab-navigation';
import Header from '../components/header';
import Product from '../screens/product-detail';


const Stack = createStackNavigator();

function AppStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Landing'>
                <Stack.Screen name='Landing' component={BottomTabs} options={{ headerTitle: props => <Header {...props} /> }} />
                <Stack.Screen name='Profile' component={Profile} options={{ title: 'Profile' }} />
                <Stack.Screen name='Cart' component={Cart} options={{ title: 'Cart' }} />
                <Stack.Screen name='ProductDetail' component={Product} options={{ title: 'Product Detail' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStackNavigator;
