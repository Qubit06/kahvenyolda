import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileForm from './ProfileForm';
import COLORS from '../../components/Color';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ProfileHeader navigation={this.props.navigation} />
        <ScrollView>
          <ProfileForm navigation={this.props.navigation} />
        </ScrollView>
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