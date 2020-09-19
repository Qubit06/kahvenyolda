import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from './Color';
import FONTS from './/Font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
export default class ButtonConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { height, width, iconSize, textSize, text } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ backgroundColor: "red", width: wp(width), height: hp(height), backgroundColor: COLORS.brown, justifyContent: "center", alignItems: "center", borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
                    {...this.props}>
                    <Text style={{ color: COLORS.white, fontSize: textSize }}>{text}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "red", width: wp(width), height: hp(height), backgroundColor: COLORS.brownLite, justifyContent: "center", alignItems: "center", borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
                    {...this.props}>
                    <AntDesign
                        name='plus'
                        color={COLORS.brown}
                        size={iconSize} />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp("2%"),
        marginVertical: hp("2%"),
        flexDirection: "row",
    }
});