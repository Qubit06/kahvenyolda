import React, { Component } from 'react';
import { View, StyleSheet,Text, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';
import FONTS from '../../components/Font';
import COLORS from '../../components/Color';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class CampaingHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor={COLORS.brown} />
                <View style={styles.containerLeft}>
                    <TouchableOpacity
                        style={styles.buttonBar}
                        onPress={() => this.props.navigation.openDrawer()}>
                        <FontAwesome5
                            name="bars"
                            color={"white"}
                            size={24} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCenter}>
                    <Image source={require('../../images/logo.png')}
                        style={styles.image} />
                </View>
                <View style={styles.containerRight}>
                    <TouchableOpacity style={styles.buttonPriece}>
                        <View style={styles.buttonPrieceContainerOne}>
                            <Fontisto
                                name="shopping-bag"
                                color={COLORS.brown}
                                size={15} />
                        </View>
                        <View style={styles.buttonPrieceContainerTwo}>
                            <Text style={styles.text}>₺22.00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.brown,
        height: hp("11%"),
        width: width,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    containerLeft: {
        height: hp("12%"),
        width: wp("20%"),
        justifyContent: "center",
        alignItems: "flex-start",
    },
    containerCenter: {
        height: hp("12%"),
        width: wp("60%"),
        justifyContent: "center",
        alignItems: "center",
    },
    containerRight: {
        height: hp("12%"),
        width: wp("20%"),
        justifyContent: "center"
    },
    buttonBar: {
        justifyContent: "center",
        alignItems: "center",
        height: hp("5%"),
        width: wp("10%"),
        marginLeft: wp("2%")
    },
    buttonPriece: {
        backgroundColor: "white",
        height: hp("4%"),
        width: wp("17%"),
        marginBottom: hp("1%"),
        borderRadius: 3,
        flexDirection: "row"
    },
    buttonPrieceContainerOne: {
        height: hp("4%"),
        width: wp("7%"),
        alignItems: "center",
        justifyContent: "center",
    },
    buttonPrieceContainerTwo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.gray,
        borderRadius: 3,
    },
    text: {
        color: COLORS.brown,
        fontSize: FONTS.smallTextFont,
        fontWeight: "bold"
    },
    image: {
        resizeMode: "cover",
        height: hp("6%"),
        width: wp("60%")
    }
});