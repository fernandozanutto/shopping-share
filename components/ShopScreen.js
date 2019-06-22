import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import MultiSelect from 'react-native-multiple-select';


class ShopItem extends React.Component {
    constructor(props) {
        super(props)

        

        this.state = {
            name: props.value || "",
            people: props.people || Array(5).fill({ id: '' + Math.floor(Math.random() * 1000), name: 'test' })
        }
    }

    render() {
        selectedItems = [];
        return (
            <View>
                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(name) => this.setState({ name })} value={this.state.name} />
                <MultiSelect
                    hideTags
                    items={this.state.people}
                    onSelectedItemsChange={() => { }}
                    hideTags

                    uniqueKey="id"

                    selectedItems={selectedItems}
                    selectText="Pick Items"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}

                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#CCC"
                    submitButtonText="Submit"
                />

            </View>
        )
    }
}

export default class ShopScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: Array(1).fill(ShopItem)
        }
    }

    static navigationOptions = () => ({
        title: 'Nova Compra'
    })

    renderItem(item, index) {
        return (
            <ShopItem value={""} people={""} key={index} />
        )
    }

    handleAddClick() {
        const items = this.state.items.slice()

        items.push(<ShopItem value="" key={items.length - 1} />)

        this.setState({ items })
    }

    handleSaveClick() {

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                {this.state.items.map(this.renderItem)}

                <Button title="Add" onPress={() => this.handleAddClick()} />

                <Button title="Salvar Compra" onPress={() => this.handleSaveClick()} />


            </View>
        );
    }
}
