import React, { Component } from 'react';
import { Text, View } from 'react-native';
import api from '../services/api';

export default class Main extends Component {

    static navigationOptions = {
        title: "Mateus Spadari",
    };

    state = {
        docs: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;
        console.log('DOCS: ', docs);
        this.setState({ docs });
    }

    render() {
        return (
            <View>
                <Text>Hello World ! {this.state.counter} </Text>
                {this.state.docs.map(products => (
                    <Text key={products._id}>{products.title}</Text>
                ))}
            </View>
        );
    }
}