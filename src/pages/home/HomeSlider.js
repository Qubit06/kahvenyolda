import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '../../components/Slider';
export default class HomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

