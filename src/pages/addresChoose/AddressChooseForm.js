import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AddresList from './AddressList';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import AddressAdd from '../../components/AddressAdd';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

export default class AddressChooseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AddresList />
        <View style={styles.addressContainer}>
          <Text style={styles.text}>Adres Ekle</Text>
        </View>
        <AddressAdd
          navigation={this.props.navigation}
          textName={"Ev Adresi Ekle"}
          iconName={"home"}
          iconSize={20}
        />
        <AddressAdd
          navigation={this.props.navigation}
          textName={"Ev Adresi Ekle"}
          iconName={"home"}
          iconSize={20}
        />
        <AddressAdd
          navigation={this.props.navigation}
          textName={"Ev Adresi Ekle"}
          iconName={"home"}
          iconSize={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: hp("5%"),
  },
  addressContainer: {
    marginTop: hp("3%"),
    marginBottom: hp("1%"),
    marginHorizontal: wp("2%")
  },
  text: {
    color: COLORS.brown,
    fontSize: FONTS.mediumTextFont,
    fontWeight: "500"
  }

});