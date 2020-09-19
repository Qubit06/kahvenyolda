import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import StoreContentHeader from './StoreContentHeader';
import StoreContentForm from './StoreContentForm';
import COLORS from '../../components/Color';


export default class StoreContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StoreContentHeader navigation={this.props.navigation} />
                <ScrollView>
                    <StoreContentForm navigation={this.props.navigation} />
                </ScrollView>

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bodyBackground
    },
});