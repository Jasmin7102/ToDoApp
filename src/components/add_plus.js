import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';

class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onAddPress}
        style={{
          height: 60,
          width: 60,
          backgroundColor: 'red',
          borderTopLeftRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 25, fontWeight: '600'}}>+</Text>
      </TouchableOpacity>
    );
  }
}

export default AddButton;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
