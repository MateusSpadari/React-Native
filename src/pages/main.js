import React, { Component } from 'react';
import { Text, View } from 'react-native';
import api from '../services/api';

export default class Main extends Component {

    static navigationOptions = {
        title: "Mateus Spadari",
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;
        console.log('DOCS: ', docs);
    }

    render() {
        return(
            <View>
                <Text>Hello World !</Text>
            </View>
        );
    }
}