import React from 'react';
import { Text, View, Button } from 'react-native';

export default class UsersScreen extends React.Component {
    static navigationOptions = () => ({
        drawerLabel: 'Home',
        title: 'Homeeee',
    })

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Tela de usuário!</Text>
            </View>
        );
    }
}
