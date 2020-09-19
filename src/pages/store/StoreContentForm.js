import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import ImageBox from '../../components/ImageBox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Data from './Data';
const width = Dimensions.get('window').width;
export default class StoreContentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            contacs: Data
        };
    }

    renderContactsItem = ( item, index ) =>
        <View key={item.id.toString()} >
            <TouchableOpacity style={[styles.itemContaier]}
                onPress={() => {
                    this.props.navigation.navigate("ProductDetail")
                }}>
                <View style={styles.itemListContainer}>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.smallTextFont, fontWeight: "400", marginVertical: 4 }}>{item.content}</Text>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "bold" }}> ₺{item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
        ;

    searcHfillter = (text) => {
        const newData = Data.filter(item => {
            const listItem = `${item.name.toLowerCase()}`;

            return listItem.indexOf(text.toLowerCase()) > -1;
        });

        this.setState({
            contacs: newData,
        })
    };

    renderHeader = () => {
        const { text } = this.state;
        return (
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <TextInput
                        returnKeyType={"done"}
                        autoCapitalize="none"
                        placeholder="Canınız ne çekiyor ?"
                        underlineColorAndroid="transparent"
                        onChangeText={text => {
                            this.setState({
                                text,
                            });
                            this.searcHfillter(text);
                        }}
                        value={text}
                        style={styles.textInput} />
                    <FontAwesome5
                        name='search'
                        color={COLORS.brown}
                        //type='evilicon'
                        style={{ position: "absolute", top: 10, paddingVertical: 2, left: 3 }}
                        size={15}
                    />
                </View>
                <Text style={{ color: COLORS.brown, fontSize: 11, fontWeight: "700", margin: 15, }}>En Sevilenler</Text>
            </View>
        )

    };
    render() {
        return (
            <View style={styles.container}>
                <ImageBox imageUri={require('../../images/img.jpg')} />
                <Entypo
                    name='heart-outlined'
                    color={COLORS.gray}
                    style={{ top: 10, right: 10, position: "absolute", color: "white" }}
                    size={20} />
                <View style={styles.boxOne}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.boxOneChildOne}>
                            <Text style={styles.textAdress}>Maltepe Starbucks (Fulya Mah. Mimarsinan Cd.)</Text>
                        </View>
                        <View style={styles.boxOneChildTwo}>
                            <View style={{ flexDirection: "row" }}>
                                <Entypo
                                    name='star'
                                    color={COLORS.brown}
                                    //type='evilicon'
                                    style={{ marginLeft: 5, top: 2 }}
                                    size={13}
                                />
                                <Text style={styles.textPoint}>4.2</Text>
                                <Text style={styles.textPointPiece}>(30)</Text>
                            </View>
                            <Text style={styles.textClosing}>Kapanış 22:00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxTwo}>
                    <View style={{ marginHorizontal: 5 }}>
                        <Text style={styles.textStoreInformation}>Dükkan bu bölgede sadece kendi kuryesiyle teslimat yapmaktadır.</Text>
                        <View style={styles.boxTwoChildOne}>
                            <View style={{
                                backgroundColor: COLORS.brown,
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginTop: 2
                            }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    textAlign: 'center',
                                    justifyContent: "center",
                                    color: COLORS.white,
                                    fontSize: 7,
                                    //lineHeight: fontSize,
                                }}>D</Text>
                            </View>
                            <Text style={[styles.text, { color: COLORS.brown, fontSize: 11, fontWeight: "bold" }]}> Dükkan <Text style={[styles.text, { color: COLORS.brown, fontSize: 11, fontWeight: "500" }]}>getirsin</Text> </Text>
                        </View>
                        <View style={styles.boxTwoChildTwo}>
                            <Text style={styles.text}>15-20 dk</Text>
                            <Text style={styles.text}>.</Text>
                            <Text style={styles.text}>Ücretsiz Teslimat</Text>
                            <Text>.</Text>
                            <Text style={styles.text}>Min 20 TL</Text>
                        </View>
                        <Text style={{ color: COLORS.brown, fontSize: 11, fontWeight: "700" }}>Ek Bilgiler</Text>
                    </View>
                </View>
                {this.renderHeader()}
                <View>
                    {this.state.contacs.map((item, index) => this.renderContactsItem(item, index))}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContaier: {
        flex: 1,
        flexDirection: "column",
        paddingVertical: 5,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        height: hp("10%"),
        backgroundColor: COLORS.gray,
        borderBottomColor: COLORS.brownLite,
        borderBottomWidth: 0.5
    },
    boxOne: {
        borderBottomColor: COLORS.brownLite,
        backgroundColor: COLORS.gray,
        borderBottomWidth: 0.5,
        height: hp("10"),
    },
    boxOneChildOne: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 5,
        height: hp("10"),
        width: wp("75%")
    },
    boxOneChildTwo: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: 10,
        alignItems: "flex-end",
        height: hp("6"),
        width: wp("21%")
    },
    boxTwo: {
        height: hp("16%"),
        backgroundColor: COLORS.gray,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 10,
    },
    boxTwoChildOne: {
        marginBottom: 10,
        flexDirection: "row"
    },
    boxTwoChildTwo: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchContainer: {
        flexDirection: "column",
        height: hp("13%"),
        backgroundColor: COLORS.brownLite
    },
    searchInputContainer: {
        marginHorizontal: 15,
        marginTop: 5
    },
    textInput: {
        backgroundColor: COLORS.white,
        borderRadius: 2,
        padding: 7,
        paddingLeft: 20,
    },
    textAdress: {
        fontSize: 12,
        color: COLORS.brown,
        fontWeight: "500"
    },
    textClosing: {
        fontSize: FONTS.smallTextFont,
        color: COLORS.brown,
        fontWeight: "700"
    },
    textPoint: {
        fontSize: FONTS.mediumTextFont,
        color: COLORS.brown,
        fontWeight: "bold"
    },
    textPointPiece: {
        fontSize: FONTS.smallTextFont,
        color: COLORS.brown,
        top: 3,
        paddingRight: 3
    },
    textStoreInformation: {
        fontSize: 11,
        color: COLORS.brown,
        marginVertical: 10,
        fontWeight: "500"
    },
    text: {
        fontSize: 11,
        color: COLORS.brown,
        fontWeight: "500"
    }
});