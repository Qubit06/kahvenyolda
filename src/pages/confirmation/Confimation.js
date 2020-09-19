import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ConfimationHeader from './ConfimationHeader';
import ConfirmationForm from './ConfirmationForm';
import COLORS from '../../components/Color';
export default class Confimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ConfimationHeader navigation={this.props.navigation} />
        <ConfirmationForm navigation={this.props.navigation} />
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