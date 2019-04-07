import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';



class ShopList extends React.Component {
    constructor(props) {
        super(props)
        this.shopList = Array(1).fill({ 'date': '23/03/2019', 'title': 'nome do estabelecimento' })
    }

    render() {
        console.log(this.shopList)
        return (

            <FlatList
                data={this.shopList}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.date}
                    />
                )}
            />
        )
    }
}


export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Minhas Compras'
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Compras anteriores</Text>

                <View style={styles.scene}>
                    <ShopList />
                </View>

                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.push("NewShopScreen")} >
                </ActionButton>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    scene: {
        flex: 1,
        paddingTop: 25,
        width: '100%'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
