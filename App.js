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
        labelStyle: {
            fontSize: 12,
            lineHeight: 20,
        },
        style: {
            paddingVertical: 10,
            backgroundColor: "#fff"
        },
    }
})

const AppSwitchNavigator = createSwitchNavigator({
    LoginScreen,
    AppTabNavigator
})

export default createAppContainer(AppSwitchNavigator)
