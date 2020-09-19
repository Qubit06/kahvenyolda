import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProductDetailHeader from './ProductDetailHeader';
import ProductDetailForm from './ProductDetailForm';
import COLORS from '../../components/Color';
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ProductDetailHeader navigation={this.props.navigation} />
        <ScrollView >
          <ProductDetailForm navigation={this.props.navigation} />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bodyBackground,
  },
});