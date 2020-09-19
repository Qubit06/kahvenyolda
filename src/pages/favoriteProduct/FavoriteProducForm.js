import React, { Component } from 'react';
import { View } from 'react-native';
import FavoriteProductList from './FavoriteProductList';
export default class FavoriteProducForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <FavoriteProductList />
      </View>
    );
  }
}
