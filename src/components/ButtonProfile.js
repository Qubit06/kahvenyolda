import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import COLORS from './Color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import FONTS from './Font';
const width = Dimensions.get('window').width;
export default class ButtonProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { iconName, textName, iconSize } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(this.props.nameRouter)
          }}
          style={styles.button}>
          <View style={styles.containerLeft}>
            <FontAwesome5
              name={iconName}
              color={COLORS.brown}
              size={iconSize}
            />
          </View>
          <View style={styles.containerCenter}>
            <Text style={styles.text}>{textName}</Text>
          </View>
          <View style={styles.containerRight}>
            <FontAwesome5
              name="chevron-right"
              color={COLORS.brown}
              size={20} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: hp("3%"),
    backgroundColor: COLORS.brownLite,
  },
  button: {
    height: hp("7%"),
    width: width,
    flexDirection: "row",
  },
  containerLeft: {
    height: hp("7%"),
    width: wp("10%"),
    justifyContent: "center",
    alignItems: "center",

  },
  containerCenter: {
    height: hp("7%"),
    width: wp("80%"),
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerRight: {
    height: hp("7%"),
    width: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: FONTS.mediumTextFont,
    color: COLORS.brown,
    fontWeight: "500"
  }
});