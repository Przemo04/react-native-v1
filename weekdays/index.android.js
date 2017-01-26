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
	Navigator
} from 'react-native';

var Main = require('./app/Main');
// var Book = require('./app/Book');
//import Book from './app/Book';
var Book = require('./app/Book');
var Category = require('./app/Category');

export default class weekdays extends Component {

	renderScene(route, navigator){
			_navigator = navigator;
				if(route.id === 'Main'){
					return(<Main navigator={navigator} title="Main"/>);
				}
				if(route.id === 'Category'){
					return(<Category navigator={navigator} title="Category"/>);
				}
				else{
					return(<Book comic={route.comic} navigator={navigator} title="Book" />);
				}
	}
  render() {

    return (
			<Navigator
				initialRoute = {{id: 'Category'}}
				renderScene = {this.renderScene}
				configureScreen ={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom }
				/>

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

});

AppRegistry.registerComponent('weekdays', () => weekdays);
