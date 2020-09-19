import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';
import SingUpHeaderForm from './SingUpHeaderForm';
import SingUpForm from './SingUpForm';
import COLORS from '../../components/Color';
export default class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SingUpHeaderForm navigation={this.props.navigation} />
        <SingUpForm navigation={this.props.navigation} />
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