import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from './Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
export default class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            piece: 0,
        };
    }

    increase = () => {
        this.setState({
            piece: ++this.state.piece
        })
    }

    reduce = () => {
        if (this.state.piece >= 1) {
            this.setState({
                piece: --this.state.piece,
            })
        }

    };
    render() {
        const { height, width, iconSize, textSize } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ backgroundColor: "red", width: width, height: height, backgroundColor: COLORS.brownLite, justifyContent: "center", alignItems: "center" }}
                    {...this.props}
                    onPress={this.reduce}>
                    <AntDesign
                        name='minus'
                        color={COLORS.brown}
                        size={iconSize} />
                </TouchableOpacity>
                <View style={{ backgroundColor: "red", width: width, height: height, backgroundColor: COLORS.brown, justifyContent: "center", alignItems: "center" }}
                    {...this.props}>
                    <Text style={{ color: COLORS.white, fontSize: textSize }}>{this.state.piece}</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: "red", width: width, height: height, backgroundColor: COLORS.brownLite, justifyContent: "center", alignItems: "center" }}
                    {...this.props}
                    onPress={this.increase}>
                    <AntDesign
                        name='plus'
                        color={COLORS.brown}
                        size={iconSize} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: hp("2%"),
        flexDirection: "row"
    }
});