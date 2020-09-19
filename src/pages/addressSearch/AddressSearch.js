import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AddressSearchHeader from './AddressSearchHeader';
import AddressSearchForm from './AddressSearchForm';
import COLORS from '../../components/Color';
export default class AddressChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AddressSearchHeader navigation={this.props.navigation} />
        <AddressSearchForm navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bodyBackground
  },

});