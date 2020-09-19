import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
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
const width = Dimensions.get('window').width;
export default class ConfirmationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image source={require('../../images/img.jpg')}
                        style={styles.image} />
                    <Text style={styles.text}>Aksaray Mahallesi</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.bodyContainerOne}>
                        <Text style={styles.textName}>Americano</Text>
                        <Text style={styles.textPrice}>₺ 22.00</Text>
                    </View>
                    <View style={styles.bodyContainerTwo}>
                        <ButtonGroup
                            height={30}
                            width={30}
                            iconSize={15}
                            textSize={COLORS.largeTextFont}
                        />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    < ButtonConfirmation
                        //onPress={() => { this.props.navigation.navigate("Confimation") }}
                        height={8}
                        width={40}
                        iconSize={25}
                        textSize={COLORS.largeTextFont}
                        text={"Devam"} />
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
    topContainer: {
        flexDirection: "row",
        height: hp("10%"),
        width: width,
        backgroundColor: COLORS.brownLite,
        alignItems: "center"
    },
    bodyContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: hp("4%"),
        backgroundColor: COLORS.brownLite,
        height: hp("12%"),
    },
    bodyContainerOne: {
        marginVertical: hp("2%"),
        marginHorizontal: wp("2%"),
        flexDirection: "column",
    },
    bodyContainerTwo: {
        flexDirection: "column-reverse",
        right: wp("2%"),
    },
    bottomContainer: {
        width: width,
        marginTop: hp("35%"),
        alignItems: "center",
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        resizeMode: "cover",
        marginVertical: hp("2%"),
        marginHorizontal: wp("2%"),
    },
    text: {
        fontSize: FONTS.mediumTextFont,
        color: COLORS.brown,
        fontWeight: "600"
    },
    textName: {
        color: COLORS.brown,
        fontSize: FONTS.largeTextFont,
        fontWeight: "bold"
    },
    textPrice: {
        color: COLORS.brown,
        fontSize: FONTS.largeTextFont,
        fontWeight: "700",
        paddingTop: hp("2%")
    },
});