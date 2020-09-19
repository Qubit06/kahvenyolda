import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import Entypo from 'react-native-vector-icons/Entypo';
import ShopData from './ShopData';
import Fontisto from 'react-native-vector-icons/Fontisto';
const width = Dimensions.get('window').width;
export default class HomeAllShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',

        };
    }
    renderContactsItem = (item, index) =>
        <View key={item.id.toString()} style={styles.box}>
            <View style={styles.boxChild}>
                <Image source={require('../../images/img.jpg')}
                    style={styles.image}/>
            </View>
            <View style={styles.boxChildTwo}>
                <Text style={styles.textName}>{item.name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Fontisto
                        name='coffeescript'
                        color={COLORS.brown}
                        style={{ top: 3, }}
                        size={10}/>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>30-40 dk</Text>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>-</Text>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>Min.₺25.00</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        backgroundColor: COLORS.brown,
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginTop: 5,
                        left: 1
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            textAlign: 'center',
                            justifyContent: "center",
                            color: COLORS.white,
                            fontSize: 7,
                        }}>D</Text>
                    </View>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500", paddingLeft: 2 }}>30-40 dk</Text>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>-</Text>
                    <Text style={{ color: COLORS.brown, fontSize: FONTS.mediumTextFont, fontWeight: "500" }}>Min.₺25.00</Text>
                </View>
            </View>
            <View style={styles.boxChildThree}>
                <View style={{ flexDirection: "row",backgroundColor:COLORS.brownLite,borderRadius:10 }}>
                    <Entypo
                        name='star'
                        color={COLORS.brown}
                        size={15}/>
                    <Text style={styles.textPoint}>4.2</Text>
                    <Text style={styles.textPointPiece}>(30)</Text>
                </View>
            </View>
        </View>
        ;

    render() {
        return (
            <View style={styles.container}>
                {ShopData.map((item, index) => this.renderContactsItem(item, index))}
            </View>
        )
        return (

            <View style={styles.container}>
                
                <FlatList
                    pagingEnabled={true}
                    //  ListHeaderComponent={this.renderHeader}
                    data={ShopData}
                    renderItem={this.renderContactsItem}
                    
                    keyExtractor={item => item.id.toString()}

                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp("5%")
    },
    box: {
        flex:1,
        width:width,
        flexDirection: "row",
        justifyContent: "center",
        height: hp("10%"),
        backgroundColor: COLORS.gray,
        justifyContent: "flex-start",
        borderWidth: 0.5,
        borderColor: COLORS.brownLite
    },
    boxChild: {
        flex:1,
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    boxChildTwo: {
        flex:2,
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"flex-start"     
    },
    boxChildThree: {
        flex:1,
        flexDirection: "column",
        justifyContent:"flex-start",
        marginTop:hp("2.4%"),
        alignItems:"flex-end",
        marginRight:5,
       
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
    },
    textPoint: {
        fontSize: FONTS.mediumTextFont,
        color: COLORS.brown,
    },
    textPointPiece: {
        fontSize: FONTS.smallTextFont,
        color: COLORS.brown,
        paddingTop: 2
    },
});