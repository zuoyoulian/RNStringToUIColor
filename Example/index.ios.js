/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

/* var TFHexStringToColor = NativeModules.TFHexStringToColor; */
import TFHexStringToColor from '../HexStringToUIColor';

class Example extends Component {
  
  
  hexStringToColor() {
	 const color = {
	  hexstring:'#FFFFFF'
     };
     console.log('TFHexStringToColor = ', TFHexStringToColor);
     
     TFHexStringToColor.hexStringToColor(color, (response) => {
	     console.log('Response = ', response);
     });
  }

  render() {
    return (
      <View style={styles.container}>
	        <TouchableOpacity onPress={this.hexStringToColor.bind(this)}>
	          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
	          </View>
	        </TouchableOpacity>
	      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
});

AppRegistry.registerComponent('Example', () => Example);
