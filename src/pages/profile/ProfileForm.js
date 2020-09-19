import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonProfile from '../../components/ButtonProfile';
import COLORS from '../../components/Color';
import FONTS from '../../components/Font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
export default class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ButtonProfile
          nameRouter={"Login"}
          navigation={this.props.navigation}
          iconName={"user"}
          textName={"Giriş Yap"}
          iconSize={20}
        />
        <ButtonProfile
          nameRouter={"AddressChoose"}
          navigation={this.props.navigation}
          iconName={"map-marker"}
          textName={"Adreslerim"}
          iconSize={20}
        />
        <ButtonProfile
          nameRouter={"FavoriteProduct"}
          navigation={this.props.navigation}
          iconName={"star"}
          textName={"Favori Ürünler"}
          iconSize={20}
        />
        <ButtonProfile

          navigation={this.props.navigation}
          iconName={"question-circle"}
          textName={"Yardım"}
          iconSize={20}
        />
        <Text style={styles.text}>Dil - Language</Text>
        <ButtonProfile
          navigation={this.props.navigation}
          iconName={"fa"}
          textName={"Türkçe"}
          iconSize={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: hp("2%"),
    marginBottom: hp("1.5%"),
    marginLeft: wp("2%"),
    color: COLORS.brown,
    fontSize: FONTS.profileTextFont,
    fontWeight: "600",
    left: 5
  }

});