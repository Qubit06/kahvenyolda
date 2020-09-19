import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import ButtonRadio from '../../components/ButtonRadio';
var radio_props1 = [
    { label: 'Short (Küçük Boy)', value: 0 },
    { label: 'Tall(Büyük Boy) ₺3.00', value: 1 },
    { label: 'Grande(BüyüK Boy) ₺5.00', value: 2 }
];
var radio_props2 = [
    { label: 'Az Yağlı Süt', value: 0 },

];
var radio_props3 = [
    { label: 'Karamel Aroması', value: 0 },
    { label: 'Çikolata Aroması', value: 1 },
    { label: 'Fındık Aroması', value: 2 }
];
var radio_props4 = [
    { label: 'İstiyorum', value: 0 },
];
var radio_props5 = [
    { label: 'Kafeinsiz İstiyorum', value: 0 },

];

export default class ProductListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Boy Tercihi</Text>
                </View>
                <ButtonRadio radio_props={radio_props1} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Süt Seçimi</Text>
                </View>
                <ButtonRadio radio_props={radio_props2} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Aroma Tercihi</Text>
                </View>
                <ButtonRadio radio_props={radio_props3} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Ekstra Shot</Text>
                </View>
                <ButtonRadio radio_props={radio_props4} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Kafein Seçimi</Text>
                </View>
                <ButtonRadio radio_props={radio_props5} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textContainer: {
        height: hp("5.5%"),
        backgroundColor: COLORS.brownLite,
        justifyContent: "center",
    },
    text: {
        marginHorizontal: wp("2%"),
        color: COLORS.brown,
        fontSize: FONTS.productDetailTextFont,
        fontWeight: "400"

    }
});