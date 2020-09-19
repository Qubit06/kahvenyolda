import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AddressMapHeader from './AddressMapHeader';
import AddressMapForm from './AddressMapForm';
import COLORS from '../../components/Color';
export default class AddressMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AddressMapForm navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bodyBackground,
    },

});