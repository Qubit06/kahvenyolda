import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from '../components/Color';
import { Icon } from 'react-native-elements';
export default class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...this.props} >
                    <View style={styles.drawerContent}>
                        <View style={styles.logo}>
                            <Image source={require('../images/logo.png')}
                                style={styles.image}
                            />
                        </View>
                        <Drawer.Section style={styles.drawerSection} title="Priority">
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name='home'
                                        color="#374B73"
                                        size={29}
                                    />
                                )}
                                label="Campaign"
                                labelStyle={{ fontSize: 16 }}
                                onPress={() => { this.props.navigation.navigate('Campaign') }}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    logo: {
        flex: 1,
        bottom: hp("1%"),
        justifyContent: "center",
        alignItems: "center",
        height: hp("15%"),
        backgroundColor: COLORS.brown
    },
    image: {
        resizeMode: "cover",
        height: hp("5%"),
        width: wp("50%")
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 20,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});