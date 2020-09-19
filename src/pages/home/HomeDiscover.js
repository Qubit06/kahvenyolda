import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ShopData from './ShopData';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
export default class HomeDiscover extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderContactsItem = ({ item, index }) =>
        <View style={styles.box}>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate("StoreContent")
                }}>
                <Image source={require('../../images/img.jpg')}
                    style={styles.image} />
                <Entypo
                    name='heart-outlined'
                    color={COLORS.gray}
                    style={{ top: 10, right: 10, position: "absolute", color: "white" }}
                    size={20} />
            </TouchableOpacity>
            <Text style={styles.textName}>{item.name}</Text>
            <View style={styles.boxOne}>
                <View style={styles.boxOneChild}>
                    <View style={{ flexDirection: "row" }}>
                        <Fontisto
                            name='coffeescript'
                            color={COLORS.brown}
                            //type='evilicon'
                            style={{ top: 3, }}
                            size={10}
                        />
                        <Text style={[styles.text, { color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "bold" }]}> kahvenyolda <Text style={[styles.text, { color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }]}>getirsin</Text> </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>15-20 dk</Text>
                        <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>-</Text>
                        <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>Min. ₺25.00</Text>
                    </View>
                </View>

            </View>
        </View>
        ;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    pagingEnabled={true}
                    horizontal={true}
                    data={ShopData}
                    renderItem={this.renderContactsItem}
                    keyExtractor={item => item.id.toString()} >
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: wp("100%"),
        height: hp("30%"),
        alignItems: "center"
    },
    box: {
        flexDirection: "column",
        marginHorizontal: wp("2.5%"),
        width: wp("95%"),
        height: hp("30%"),
        borderRadius: 10,
        borderColor: COLORS.gray,
        borderWidth: 1,
        backgroundColor: COLORS.gray,
    },
    boxOne: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: wp('100%')
    },
    boxOneChild: {
        paddingVertical: 2,
        flexDirection: "column",
    },
    boxTwoChild: {
        paddingVertical: 2,
        width: wp('60%'),
        flexDirection: "column",
        marginLeft: 70
    },
    image: {
        height: hp("20%"),
        width: wp("95%"),
        resizeMode: "cover",
        borderRadius: 10
    },
    textName: {
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFon,
        fontWeight: "500",
        paddingTop: 2,
    }
});