import React from 'react';
import { Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login!</Text>
                <Button title="Login" onPress={ ()=>this.props.navigation.navigate('HomeScreen')} />
            </View>
        );
    }
}
