import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground,
ActivityIndicator, StatusBar, } from 'react-native';

import SearchInput from './components/SearchInput';

import weatherService from './utils/WeatherService';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      location: '',
      temperature: 0,
      description: '',
      loading: true
    }
  }

  componentDidMount() {
    this.handleUpdateLocation('Piliyandala');
  }

  handleUpdateLocation = (newLocation) => {
    this.setState({ loading: true });
    weatherService.findCurrentWeather(newLocation).then(weather => {
      this.setState({
        location: newLocation,
        temperature: weather.temperature,
        description: weather.description,
        loading: false
      })
    }).catch(error => this.setState({ loading: false }));
  }

  render() {
    const { location, temperature, description, loading } = this.state;
    return (
      <KeyboardAvoidingView style={ styles.container } behavior="padding">
        <StatusBar barStyle="light-content" />
        <ImageBackground source={ require('./assets/clear.png') } style={styles.imageContainer} imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            { loading && <ActivityIndicator animating={ loading } color="white" size="large" /> }
            <Text style={[styles.largeText, styles.textStyle]}>{ location }</Text>
            <Text style={[styles.smallText, styles.textStyle]}>{ description }</Text>
            <Text style={[styles.largeText, styles.textStyle]}>{ temperature }°</Text>
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
