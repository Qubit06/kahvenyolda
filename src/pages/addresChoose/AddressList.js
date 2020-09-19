import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,  TouchableOpacity } from 'react-native';
import AddressData from './AddressData';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;

export default class AddressList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderContactsItem = (item, index) =>
        <View key={item.id.toString()} style={styles.box}>
            <View style={styles.boxChild}>
                <View style={{ width: 20, height: 20 }}>
                    <FontAwesome5
                        name={item.iconName}
                        color={COLORS.brown}
                        //type='evilicon'
                        //style={{ top: 3, }}
                        size={item.iconName === "warehouse" ? 16 : 20}
                    />
                </View>
                <View style={styles.boxChildOne}>
                    <Text style={styles.textWhere}>{item.where}</Text>
                    <Text style={styles.textAddress}>{item.address}</Text>
                </View>
                <View style={styles.boxChildTwo}>
                    <TouchableOpacity
                        style={styles.boxChildTwoButton}>
                        <FontAwesome5
                            name="trash-alt"
                            color={COLORS.brown}
                            size={18}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        ;

    render() {
        return (
            <View style={styles.container}>

                {AddressData.map((item, index) => this.renderContactsItem(item, index))}

            </View>
        )
        return (
            <View style={styles.container}>

                <FlatList
                    //pagingEnabled={true}
                    //horizontal={true}
                    data={AddresData}
                    renderItem={this.renderContactsItem}
                    keyExtractor={item => item.id.toString()}
                >

                </FlatList>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.brownLite,
        width: windowWidth,



    },
    box: {
        height: hp("7%"),
        borderBottomWidth: 0.8,
        borderBottomColor: COLORS.gray,
        flexDirection: "column",
        justifyContent: "center",
    },
    boxChild: {
        alignItems: "flex-start",
        flexDirection: "row",
        marginHorizontal: 5,
    },
    boxChildOne: {
        width: wp("80%"),

        marginHorizontal: 5,
        flexDirection: "row"
    },
    boxChildTwo: {
        //width: wp("80%"),
        width: 25,
        height: 25,
        marginHorizontal: 5,
        flexDirection: "row"
    },
    boxChildTwoButton: {
        width: 25,
        height: 25,
        alignItems: "center",
        marginVertical: 1,
        justifyContent: "center",
    },
    textWhere: {
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "bold",
        paddingRight: 3,
        top: 3

    },
    textAddress: {
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "400",
        marginRight: 25,
        top: 3

    }

});