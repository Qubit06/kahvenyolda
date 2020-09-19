import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
export default class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onCheckBox() {
    this.setState({
      check: !this.state.check
    })
  }
  render() {
    return (
      <CheckBox
        value={this.state.check}
        onChange={() => this.onCheckBox()}
        style={styles.checkStyle}/>
    );
  }
}

const styles = StyleSheet.create({
  checkStyle: {
    height: 50,
    width: 40,
  }
});