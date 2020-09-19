import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from './Color';
import FONTS from './Font';
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    const { width } = this.props;
    return (
      <TextInput
        {...this.props}
        placeholderTextColor={COLORS.borderColor}
        autoCorrect={false}
        style={[styles.input, { width: wp(width) }]}
        value={this.state.text}
        ref={this.props.inputRef}
        onChangeText={text => this.setState({ text })} />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: hp("6%"),
    color: COLORS.black,
    fontSize: FONTS.inputTextFont,
    marginBottom: hp("1%"),
    marginTop: hp("2%"),
    marginHorizontal: wp("2.5"),
    backgroundColor: COLORS.bodyBackground,
    borderColor: COLORS.inputBorderColor,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,

  }
});