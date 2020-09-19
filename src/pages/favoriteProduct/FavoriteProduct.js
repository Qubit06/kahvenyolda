import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FavoriteProductHeader from './FavoriteProductHeader';
import FavoriteProducForm from './FavoriteProducForm';
import COLORS from '../../components/Color';

export default class FavoriteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FavoriteProductHeader navigation ={this.props.navigation}/>
        <FavoriteProducForm />
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