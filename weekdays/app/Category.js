import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	ListView,
	Alert,
	Image,
	Dimensions,
	TouchableHighlight,
  View
} from 'react-native';

import {
  Button
} from 'react-native-elements';

import { Icon } from 'react-native-elements';

const onButtonPress = () => {
  Alert.alert('Alert dziala ? ');
};

import api from '../utilties/api.js';

class Category extends Component {

	constructor(props){
		super(props);
		this.state = {

			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
		}
	}

	componentWillMount(){
		api.getRovers().then((res)=> {
			this.setState({
				dataSource: this.state.kategorie
			})
		});
	}

	renderComic(comic){
		return(
			<View>
			</View>
		)
	}

  render() {

    return (
      <View style={styles.container}>


			<Button
			  large
				backgroundColor='#69970C'
			  icon={{name: 'video-camera', type: 'font-awesome'}}
			  title='Zobacz polecane filmy' />

				<Text style={styles.largeText}>Wybierz kategorię</Text>

					<TouchableHighlight style={styles.button} onPress={() => {
							this.props.navigator.push({
								name: 'Main'
							});
							this.props.navigator.pop();
						}}>
						<Text style={styles.buttonText}>Bajki</Text>

					</TouchableHighlight>

					<TouchableHighlight style={styles.button2} onPress={() => {
							this.props.navigator.push({
								name: 'Main'
							});
							this.props.navigator.pop();
						}}>
						<Text style={styles.buttonText}>Fantastyka</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.button3} onPress={() => {
							this.props.navigator.push({
								name: 'Main'
							});
							this.props.navigator.pop();
						}}>
						<Text style={styles.buttonText}>Dramat</Text>
					</TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96E1F6',
		paddingTop: 20,
  },
	largeText: {
		flex: 1,
		fontSize: 38,
		paddingTop: 40,
		paddingLeft: 20,
		paddingRight: 20,
		color: '#173e43'
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#E4F5A3'
	},
	button2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#6E92A1'
	},
	button3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#D4B96A'
	},
	buttonText: {
		fontSize: 28,
		color: '#011A1A'
	}
});

module.exports = Category;
