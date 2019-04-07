import React from 'react';
import { StyleSheet } from 'react-native'
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
})

const AppSwitchNavigator = createSwitchNavigator({
    LoginScreen,
    AppTabNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default createAppContainer(AppSwitchNavigator)
