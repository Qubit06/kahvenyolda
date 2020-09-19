import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export default class ImageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={this.props.imageUri} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: 150,

    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover",


    }
});