import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChangeText = (newText) => {
    this.setState({ text: newText });
  }

  handleSubmitEditing = () => {
    const { text } = this.state;
    if (!text) return;
    this.props.submitLocation(text);
  }

  render() {
    const { text } = this.state;
    return (
      <View>
        <TextInput autoCorrect={ false }
                  value={ text }
                  placeholder="Search any city"
                  placeholderTextColor="white"
                  underlineColorAndroid="transparent"
                  style={ styles.textInput }
                  clearButtonMode="always"
                  onChangeText={ this.handleChangeText }
                  onSubmitEditing={ this.handleSubmitEditing } />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 10,
    alignSelf: "center"
  },
});
