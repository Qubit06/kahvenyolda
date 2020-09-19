import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginHeaderForm from './LoginHeaderForm';
import LoginForm from './LoginForm';
import COLORS from '../../components/Color';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginHeaderForm navigation={this.props.navigation} />
                <LoginForm navigation={this.props.navigation} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bodyBackground
    },

});