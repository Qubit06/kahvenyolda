import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import HomeForm from './HomeForm';
import HomeHeaderForm from './HomeHeaderForm';
import COLORS from '../../components/Color';
const windowWidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HomeHeaderForm navigation={this.props.navigation} />
        <ScrollView>
          <HomeForm navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bodyBackground,
  },

});