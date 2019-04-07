import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';


class ShopList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.value.title,
            date: props.value.date
        }
    }

    render() {
        return (
            <ListItem containerStyle={styles.listitem}
                title={this.state.title}
                subtitle={this.state.date}
            />
        )
    }
}


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.shopList = Array(3).fill({ 'date': '23/03/2019', 'title': 'nome do estabelecimento' })
    }

    static navigationOptions = {
        title: 'Minhas Compras'
    }

    renderShopList(item, index) {
        return (
            <ShopList value={item} key={index} />
        )
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Compras anteriores</Text>

                <View style={styles.scene}>
                    {this.shopList.map(this.renderShopList)}
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
    listitem: {
        backgroundColor: 'red',
        marginTop: 20,

    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
