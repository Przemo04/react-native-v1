import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	Button,
	ListView,
	Alert,
	Image,
	Dimensions,
	TouchableHighlight,
  View
} from 'react-native';

import api from '../utilties/api.js';

//var Book = require('./Book');

const onButtonPress = () => {
  Alert.alert('Alert dziala ? ');
};


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

let widthPadding = width - '1px';

class Main extends Component {

	// onButtonPress(){
	// 	this.props.navigator.push({
	// 		id: 'Book'
	// 	});
	// }

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
				dataSource: this.state.dataSource.cloneWithRows(res.kategorie.bajki)
				// photos: res.photos,
				// roverName: res.photos[0].sol
			})
		});
	}

	renderComic(comic){
		return(
			<View>

				<Text>{comic.id}</Text>
				<Image
					style={{width: 300, height: 250}}
					source={{uri: `http://kamilaplug.pl/aplikacjamobilna/`+ comic.okladka}}
				/>
			</View>
		)
	}

  render() {

    return (
      	<View style={styles.container}>
					<TouchableHighlight onPress={() => {
	            this.props.navigator.push({
								name: 'Book'
							});
							this.props.navigator.pop();

	        }}>

					<Text style={styles.testButton}>Trstt</Text>
					</TouchableHighlight>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderComic.bind(this)}
				/>

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
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  testButton: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 40,
  },
});

module.exports = Main;
