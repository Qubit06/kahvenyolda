import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import AddresChooseHeader from './AddressChooseHeader';
import AddresChooseForm from './AddressChooseForm';
import COLORS from '../../components/Color';
export default class AddressChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AddresChooseHeader navigation={this.props.navigation} />
        <ScrollView>
          <AddresChooseForm navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bodyBackground
  },

});