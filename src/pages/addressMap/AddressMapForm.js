
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import AddressMapHeader from './AddressMapHeader';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
export default class AddressMapForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
            addressComponent: ""

        };
        navigator.geolocation = require('@react-native-community/geolocation')
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                Geocoder.init("AIzaSyBryh9k1hNhbEM5O6JKvs4-6QpmdbvzOyA"); // use a valid API key
                Geocoder.from(position.coords.latitude, position.coords.longitude)
                    .then(json => {
                        var addressComponent = json.results[0];
                        console.log(addressComponent);
                        this.setState({
                            addressComponent
                        })
                    })
                    .catch(error => console.log(error));
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                });
            },
            error => console.log(error.message),
            {
                enableHighAccuracy: false, timeout: 20000, maximumAge: 2000
            }
        );
    }
    render() {
        return (

            <View style={styles.container}>
                <AddressMapHeader navigation={this.props.navigation} />
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.container}
                    showsBuildings
                    showsTraffic
                    toolbarEnabled
                    followsUserLocation
                    showsIndoors
                    mapType="standard"
                    showsUserLocation
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <Marker coordinate={this.state} />

                </MapView>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate("AddressChoose")
                    }}>
                    <Text style={styles.textButton}>Bu Adresi Kullan</Text>
                </TouchableOpacity>
                <View style={styles.textAdressContainer}>
                    <FontAwesome5
                        name={"map-marker"}
                        color={COLORS.brown}
                        style={{ paddingHorizontal:10}}
                        size={25}
                    />
                    <Text style={styles.textAddress}>{this.state.addressComponent.formatted_address}</Text>
                </View>



            </View >

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    button: {
        position: 'absolute',
        bottom: hp("10%"),
        borderRadius: 5,
        backgroundColor: COLORS.brown,
        height: hp("7%"),
        marginHorizontal: wp("5%"),
        width: wp("90%"),
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        fontSize: FONTS.largeTextFont,
        fontWeight: "700",
        color: "white",
    },
    textAdressContainer: {
        flexDirection:"row",
        alignItems:"center",
        position: 'absolute',
        top: hp("15%"),
        backgroundColor: COLORS.gray,
        height: hp("5%"),
        marginHorizontal: wp("5%"),
        width: wp("90%"),
    },
    textAddress:{
        flex:2,
        flexWrap:"wrap",
        color:COLORS.brown,
        fontSize:FONTS.smallTextFont,
        fontWeight:"500"
    }

});
