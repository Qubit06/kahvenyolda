import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
navigator.geolocation = require('@react-native-community/geolocation');
const width = Dimensions.get('window').width;
export default class AddressSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("AddressMap")
                        }}
                    >
                        <View style={styles.iconContainer}>
                            <Feather
                                name="navigation"
                                color={COLORS.brown}
                                size={25} />
                        </View>

                        <Text style={styles.text}>Mevcut Konumu Kullan</Text>
                    </TouchableOpacity>
                </View>

                <GooglePlacesAutocomplete
                    placeholder='Adres Ara'
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyBryh9k1hNhbEM5O6JKvs4-6QpmdbvzOyA',
                        language: 'tr',
                        components: 'country:tr',
                    }}
                    styles={{
                        textInputContainer: {
                            backgroundColor: COLORS.brownLite,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                        },
                        textInput: {
                            backgroundColor: COLORS.brownLite,
                            paddingLeft:22
                        },
                        listView: {
                            backgroundColor: COLORS.brown,
                        },
                        description: {
                            color: "white"
                        }
                    }} />

                <FontAwesome5
                    name="search"
                    color={COLORS.brown}
                    //type='evilicon'
                    style={{ position: "absolute",top:10,left:5}}
                    size={20}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        top: hp("10%"),
        position: "absolute",
        backgroundColor: COLORS.brownLite,
        height: hp("7%"),
        width: width,
        justifyContent: "center",
    },
    text: {
        paddingLeft: wp("15%"),
        color: COLORS.brown,
        fontSize: FONTS.mediumTextFont,
        fontWeight: "bold"
    },
    iconContainer: {
        position: "absolute",
        height: hp("7%"),
        width: wp("15%"),
        justifyContent: "center",
        alignItems: "center",
    }

});
