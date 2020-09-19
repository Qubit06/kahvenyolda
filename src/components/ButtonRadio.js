import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from './Color';
import FONTS from './Font';
export default class ButtonRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <RadioForm
                    style={{ marginVertical: 10 }}
                    formHorizontal={false}
                    animation={true}>
                    {/* To create radio buttons, loop through your array of options */}
                    {
                        this.props.radio_props.map((obj, i) => (
                            <RadioButton labelHorizontal={true} key={i} >
                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    isSelected={this.state.value === obj.value}
                                    onPress={(value) => this.setState({ value })}
                                    borderWidth={1}
                                    buttonInnerColor={COLORS.brown}
                                    buttonOuterColor={COLORS.brown}
                                    buttonSize={10}
                                    buttonOuterSize={15}
                                    buttonStyle={{ marginTop: 5 }}
                                    buttonWrapStyle={{ left: wp("2%"), }}
                                />
                                <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={(value) => this.setState({ value })}
                                    labelStyle={{ fontSize: FONTS.mediumTextFont, color: COLORS.brown, top: 2 }} />
                            </RadioButton>
                        ))
                    }
                </RadioForm>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray,
    },
});