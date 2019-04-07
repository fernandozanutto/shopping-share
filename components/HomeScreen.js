import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Minhas Compras'
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Aqui vai a listagem de compras anteriores</Text>

                <ActionButton buttonColor="rgba(231,76,60,1)" onPress= { () => this.props.navigation.push("NewShopScreen")} >
                </ActionButton>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
