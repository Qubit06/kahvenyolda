import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchHeader from './SearchHeader';
import COLORS from '../../components/Color';
import SearchForm from './SearchForm';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchHeader navigation={this.props.navigation} />
        <SearchForm navigation={this.props.navigation} />
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