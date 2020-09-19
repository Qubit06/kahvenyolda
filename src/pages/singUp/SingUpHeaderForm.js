import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';
import COLORS from '../../components/Color';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default class SingUpHeaderForm extends Component {
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
                        style={styles.buttonGoBack}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                        <FontAwesome5
                            name="chevron-left"
                            color={"white"}
                            size={22}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCenter}>
                    <Image source={require('../../images/logo.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.containerRight}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.brown,
        height: hp("11%"),
        justifyContent: "center",
        alignItems: "center",
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
    },
    buttonGoBack: {
        justifyContent: "center",
        alignItems: "center",
        height: hp("5%"),
        width: wp("10%"),
        marginLeft: wp("3%")
    },
    image: {
        resizeMode: "cover",
        height: hp("6%"),
        width: wp("60%")
    }
});