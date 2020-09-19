import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import FONTS from './Font';
export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { color, backgroundColor, text, borderColor, borderWidth } = this.props;
    return (
      <TouchableOpacity style={[styles.button, { backgroundColor, borderColor: borderColor, borderWidth: borderWidth }]}
        {...this.props}>
        <Text style={[styles.text, { color }]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: hp("7%"),
    width: wp("95%"),
    marginBottom: hp("1%"),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("2.3%")
  },
  text: {
    fontSize: FONTS.buttonTextFont,
    fontWeight: "700"
  }
});