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
import { Card, ListItem, Button } from 'react-native-elements';
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
		api.getRovers().then((response)=> {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(response.kategorie.bajki)
			})
		});
	}

	onPress(comic){
		this.props.navigator.push({
			id: 'Book',
			comic: comic
		});
	}

	renderComic(comic){
		var opisSlice = comic.opis.slice(0, 90)
		return(
			<View>
			<Card
				title={comic.tytul}
				titleStyle={{fontSize: 24, justifyContent: 'center'}}
				image={{uri: `http://kamilaplug.pl/aplikacjamobilna/`+ comic.okladka}}
				>
				<Text style={{marginBottom: 10}}>
					{opisSlice + '...'}
				</Text>



				<Button
					icon={{name: 'input'}}
					backgroundColor='#D84727'
					fontFamily='Lato'
					buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
					title='Zobacz szczegoly'
					onPress={() => {this.onPress(comic)}}
					 />
			</Card>

			</View>
		)
	}

  render() {

    return (
      	<View style={styles.container}>
				<Button
					icon={{name: 'arrow-back'}}
					backgroundColor='#4A6C6F'
					fontFamily='Lato'
					title='Cofnij'
					onPress={() => {
							this.props.navigator.pop();
						}} />
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
