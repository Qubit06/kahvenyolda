import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import HomeDiscover from './HomeDiscover';
import HomeCategory from './HomeCategory';
import HomeSlider from './HomeSlider';
import HomeAllShop from './HomeAllShop';
import COLORS from '../../components/Color';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FONTS from '../../components/Font';
import HomeShopFlatlist from './HomeShopFlatlist';
const width = Dimensions.get('window').width;
export default class HomeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={styles.topContainer}>
                    <View style={styles.topContainerLeft}>
                        <TouchableOpacity style={styles.topButton}
                            onPress={() => {
                                navigation.navigate("AddressChoose")
                            }}>
                            <View style={{ 
                                flex: 1.6,
                                marginLeft: 3, 
                                width: 40, 
                                borderRightWidth: 2, 
                                borderRightColor: COLORS.gray 
                            }}>
                                <Entypo
                                    name='home'
                                    color={COLORS.brown}
                                    style={{ marginLeft: wp("0%") }}
                                    size={28} />
                            </View>
                            <Text style={styles.textAdress}>Teslimat Adresi Belirleyin</Text>
                            <AntDesign
                                name='right'
                                color={COLORS.brown}
                                style={{ flex: 2, marginLeft: 20, marginTop: 4,  }}
                                size={23} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topContainerRight}>
                        <Text style={styles.textRightTop}>TVS</Text>
                        <Text style={styles.textRightBottom}>10-20 dk</Text>
                    </View>
                </View>
                <View>
                    <HomeSlider />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Dükkanlar</Text>
                    </View>
                    <HomeShopFlatlist navigation={this.props.navigation} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Kategoriler</Text>
                    </View>
                    <HomeCategory />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Keşfet</Text>
                    </View>
                    <HomeDiscover />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Tüm Dükkanlar</Text>
                    </View>
                    <HomeAllShop />
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bodyBackground,
    },
    topContainer: {
        backgroundColor: COLORS.brown,
        width: width,
        height: hp("8%"),
        width: width,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    topContainerLeft: {
        flex: 1,
        flexDirection: 'row',
        width: wp("70%"),
        backgroundColor: "white",
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    topContainerRight: {
        width: wp("30%"),
        justifyContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: COLORS.brown,
    },
    topButton: {
        flex: 1,
        width: wp("70%"),
        height: hp("8%"),
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
    },
    textAdress: {
        flex: 8,
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "bold",
        paddingLeft: wp("2%")
    },
    textRightTop: {
        color: COLORS.gray,
        fontSize: FONTS.mediumTextFont,
    },
    textRightBottom: {
        color: COLORS.white,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "bold",
    },
    text: {
        fontSize: FONTS.mediumTextFont,
        color: COLORS.brown,
        marginVertical: hp("1%"),
        marginHorizontal: wp("2%"),
        fontWeight: "500"
    },
    textContainer: {
        backgroundColor: COLORS.brownLite,
        height: hp("5%")
    }
});