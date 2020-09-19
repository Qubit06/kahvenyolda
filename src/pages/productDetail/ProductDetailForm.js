import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import ButtonGroup from '../../components/ButtonGroup';
import ButtonConfirmation from '../../components/ButtonConfirmation';
import ProductListForm from './ProductListForm';

const width = Dimensions.get('window').width;
var radio_props = [
    { label: 'param1', value: 0 },
    { label: 'param2', value: 1 }
];

export default class ProductDetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.explanationContainer}>
                    <View style={styles.subExplanationContainer}>
                        <Text style={styles.productNameText}>Americano</Text>
                        <Text style={styles.productDetailText}>Ürün acı ve tatlı olarak servis edilir.</Text>
                        <Text style={styles.productPriceText}>₺22.00</Text>
                    </View>
                </View>
                < ProductListForm />
                <View style={styles.textInputContainer}>
                    <Text style={styles.textAdd}>Eklemek istediğiniz bir not varsa:</Text>
                    <TextInput
                        returnKeyType={"done"}
                        autoCapitalize="none"
                        placeholder="Not Ekle"
                        multiline={true}
                        placeholderTextColor={COLORS.brown}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <ButtonGroup
                        height={40}
                        width={40}
                        iconSize={25}
                        textSize={COLORS.largeTextFont}
                    />
                    < ButtonConfirmation
                        onPress={() => { this.props.navigation.navigate("Confimation") }}
                        height={8}
                        width={40}
                        iconSize={25}
                        textSize={COLORS.largeTextFont}
                        text={"Sepete Ekle"}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
    },
    explanationContainer: {
        flexDirection: "column",
        height: hp("15%"),
        backgroundColor: COLORS.gray,
        justifyContent: "space-between"
    },
    subExplanationContainer: {
        marginHorizontal: wp("2%"),
        marginTop: hp("1.5%")
    },
    productNameText: {
        color: COLORS.brown,
        fontSize: FONTS.largeTextFont,
        fontWeight: "bold"
    },
    productDetailText: {
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "100"
    },
    productPriceText: {
        color: COLORS.brown,
        fontSize: 15,
        fontWeight: "bold",
        top: 10
    },
    textInputContainer: {
        height: hp("15%"),
        backgroundColor: COLORS.gray
    },
    textAdd: {
        marginVertical: hp("1%"),
        marginHorizontal: wp("2%"),
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont
    },
    textInput: {
        height: hp("9%"),
        backgroundColor: COLORS.brownLite,
        paddingHorizontal: 10
    },
    bottomContainer: {
        backgroundColor: COLORS.gray,
        marginBottom: hp("5%"),
        flexDirection: "column",
        alignItems: "center",
        height: hp("22%"),
        width: width
    }

});