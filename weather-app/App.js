import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground,
ActivityIndicator, StatusBar, } from 'react-native';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

  componentDidMount() {
    console.log('Component has mounted!');
    this.handleUpdateLocation('Piliyandala');
  }

  handleUpdateLocation = (newLocation) => {
    this.setState({ location: newLocation });
  }

  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView style={ styles.container } behavior="padding">
        <StatusBar barStyle="light-content" />
        <ImageBackground source={ require('./assets/clear.png') } style={styles.imageContainer} imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={ true } color="white" size="large" />
            <Text style={[styles.largeText, styles.textStyle]}>{ location }</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
            <SearchInput submitLocation={ this.handleUpdateLocation } />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
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
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
});
