import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Check from '../../components/Check';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
export default class CheckBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: "row",marginRight:wp("15%") }}>
                <View>
                    <Check/>
                    <Check/>
                </View>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={[styles.text, { color: COLORS.brown }]}>Kullanım Koşulları</Text>
                        <Text style={[styles.text, { color: COLORS.checkTextGray }]}>'nı okudum ve kabul ediyorum.</Text>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"center",width: wp("70%")}}>
                        <Text style={[styles.text, { color: COLORS.brown }]}>Kullanım Koşulları<Text style={[styles.text, { color: COLORS.checkTextGray}]}>'nı okudum ve kabul ediyorum.ddddddddddddccccccccccccccccccccccccccccccdddddddddddd</Text> </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        marginVertical: hp("2%"),
        fontSize: FONTS.smallTextFont
    }
});