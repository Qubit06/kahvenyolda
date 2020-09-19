import React, { Component } from 'react';
import { CheckBox } from 'react-native';

export default class BoxCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
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
        onChange={() => this.onCheckBox()} />
    );
  }
}

