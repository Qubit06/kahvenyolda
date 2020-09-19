import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import FavoriteData from './FavoriteData';
import COLORS from '../../components/Color';
import ButtonGroup from '../../components/ButtonGroup';
import FONTS from '../../components/Font';
import FontAwesome5 from 'react-native-vector-icons/Entypo';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class FavoriteProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderContactsItem = ({ item }) =>
        <View style={styles.box}>
            <View style={styles.boxChild}>
                <FontAwesome5
                    name='heart'
                    color={COLORS.brown}
                    style={{ position: "absolute", top: 5, left: 5 }}
                    size={15} />
                <Image source={require('../../images/img.jpg')}
                    style={styles.image} />
                <View style={styles.boxChildSub}>
                    <ButtonGroup
                        height={25}
                        width={25}
                        iconSize={5}
                        textSize={8}
                    />
                </View>
                <View style={styles.boxChildSub}>
                </View>
            </View>

            <View style={styles.boxChildTwo}>
                <Text style={styles.priceText}>₺{item.price}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.pieceText}>{item.piece} Adet</Text>
            </View>
        </View>
        ;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    //pagingEnabled={true}
                    //horizontal={true}
                    numColumns={3}
                    data={FavoriteData}
                    renderItem={this.renderContactsItem}
                    keyExtractor={item => item.id.toString()} >
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
    },
    boxChild: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginTop: 10,
        marginLeft: 15,
        borderColor: COLORS.brown,
        borderWidth: 2,
        height: hp("15%"),
        width: wp("28%"),
    },
    boxChildSub: {
        position: "absolute",
        bottom: -30
    },
    boxChildTwo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 150,
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: "cover"
    },
    priceText: {
        color: COLORS.brown,
        fontSize: FONTS.largeTextFont,
        fontWeight: "bold"
    },
    nameText: {
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "700"
    },
    pieceText: {
        color: COLORS.brown,
        fontSize: FONTS.smallTextFont,
        fontWeight: "500"
    },
});