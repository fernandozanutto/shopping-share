import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator
} from 'react-navigation';

import UsersScreen from './components/UsersScreen';
import NewShopScreen from './components/NewShopScreen';
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'


const ShopStackNavigator = createStackNavigator({
    HomeScreen,
    NewShopScreen
})

const UserStackNavigator = createStackNavigator({
    UsersScreen
})

const AppTabNavigator = createBottomTabNavigator({
    Home: ShopStackNavigator,
    Usuarios: UserStackNavigator
}, {
        tabBarOptions: {
            /*activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'blue',
            },*/
        }
    })

const AppSwitchNavigator = createSwitchNavigator({
    LoginScreen,
    AppTabNavigator
})

export default createAppContainer(AppSwitchNavigator)
