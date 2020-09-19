import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from './Color';
import FONTS from './Font';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class AddressAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { textName, iconName, iconSize } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}
                    onPress={() => {
                        this.props.navigation.navigate("AddressSearch")
                    }}>
                    <View style={styles.box}>
                        <FontAwesome5
                            name={iconName}
                            color={COLORS.brown}
                            size={iconSize} />
                        <Text style={styles.text}>{textName}</Text>
                    </View>
                    <View style={styles.boxTwo}>
                        <FontAwesome5
                            name="plus"
                            color={COLORS.brown}
                            style={{ left: 25, }}
                            size={18} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp("7%"),
        backgroundColor: COLORS.brownLite,
        marginBottom: hp("1.5%"),
        justifyContent: "center",
        flexDirection: "row"
    },
    box: {
        flex: 3,
        flexDirection: "row",
        marginHorizontal: wp("2%"),
        alignItems: "center",
        justifyContent: "flex-start"
    },
    text: {
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "bold",
        left: 5,
        top: 2
    },
    boxTwo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});