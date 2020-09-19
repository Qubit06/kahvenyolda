import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import ShopData from './ShopData';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
export default class HomeCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderContactsItem = ({ item, index }) =>
        <View style={styles.box}>
            <TouchableOpacity>
                <Image source={require('../../images/img.jpg')}
                    style={styles.image} />
                <View style={styles.textCategoryBox}>
                    <Text style={styles.textCategoryName}>Sıcak İçecek</Text>
                </View>

            </TouchableOpacity>
        </View>
        ;
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    //pagingEnabled={true}
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
        backgroundColor: COLORS.white,
        width: windowWidth,
        height: hp("10%"),
        justifyContent: "center"
    },
    box: {
        height: hp("6%"),
        width: wp("21%"),
        borderRadius: 2,
        backgroundColor: COLORS.gray,
        marginVertical: hp("2%"),
        marginHorizontal: wp("2%")
    },
    boxOne: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    boxOneChild: {
        paddingVertical: 2,
        flexDirection: "column"
    },
    image: {
        height: hp("6%"),
        width: wp("21%"),
        resizeMode: "cover",
        borderRadius: 2
    },
    textName: {
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFon,
        fontWeight: "500",
        paddingTop: 2,
    },
    textCategoryBox: {

        width: wp("15%"),
        marginHorizontal: wp("3%"),
        position: "absolute",
        bottom: 1,
        alignItems: "center"
    },
    textCategoryName: {
        textAlign: 'center',
        fontSize: FONTS.smallTextFont,
        color: COLORS.white,
        fontWeight:"bold"
    }
});