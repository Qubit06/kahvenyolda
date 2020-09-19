import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import PopularData from './PopularData';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;


export default class SearchPopularList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderContactsItem = ({ item }) =>
        <View style={styles.box}>
            <View style={styles.boxChild}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </View>
        ;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    data={PopularData}
                    renderItem={this.renderContactsItem}
                    keyExtractor={(item, index) => item.id.toString()}>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.brownLite,
        height: hp("7%"),
        justifyContent: "center",
        width: width
    },
    box: {
        justifyContent: "center",
        height: hp("7%"),
    },
    boxChild: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        marginHorizontal: wp("2%"),
        borderColor: "#A69C97",
        height: hp("4%"),
        width: wp("21%"),
        borderRadius: 2,
    },
    text: {
        textAlign: 'center',
        color: COLORS.brown,
        fontSize: FONTS.smallTextFont,
    }
});