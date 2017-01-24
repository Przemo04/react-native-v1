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
	Button,
	ListView,
	Alert,
	Image,
  View
} from 'react-native';

import api from './utilties/api.js';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class weekdays extends Component {
	constructor(props){
		super(props);
		this.state = {
			photos: [],
			roverName: '',
			// dataSource: new ListView.DataSource({
			// 	rowHasChanged: (r1, r2) => r1 !== r2
			// }),
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
		}
	}

	componentWillMount(){
		api.getRovers().then((res)=> {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(res.photos)
				// photos: res.photos,
				// roverName: res.photos[0].sol
			})
		});
	}

	renderComic(comic){
		return(
			<View>
				<Text>{comic.id}</Text>
				<Image source={{uri:comic.img_src}} style={{width: 293, height: 110}}/>
				<Text>{comic.sol}</Text>

			</View>
		)
	}

  render() {

    return (
      <View style={styles.container}>
				<Button
				  onPress={onButtonPress}
				  title="Learn More"
				  color="#841584"
				  accessibilityLabel="Learn more about this purple button"
				/>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderComic.bind(this)}
				/>
        <Text style={styles.welcome}>
          Welcome to Reactttt!:
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
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
});

AppRegistry.registerComponent('weekdays', () => weekdays);
