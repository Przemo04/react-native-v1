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


const onButtonPress = () => {
  Alert.alert('Alert dziala ? ');
};

import api from '../utilties/api.js';

class Category extends Component {

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
				//dataSource: this.state.dataSource.cloneWithRows(res.kategorie)
				dataSource: this.state.kategorie
				//busStops: locations.getIn(['data', 'busStops'], Map({})),
				// photos: res.photos,
				// roverName: res.photos[0].sol
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
				<Text style={styles.largeText}>Duzy tekst</Text>
					<TouchableHighlight style={styles.button} onPress={() => {
							this.props.navigator.push({
								name: 'Main'
							});
							this.props.navigator.pop();
						}}>
						<Text style={styles.buttonText}>Zobacz filmy dostepne w tej kategorii</Text>
					</TouchableHighlight>

					<TouchableHighlight style={styles.button2} onPress={() => {
							this.props.navigator.push({
								name: 'Main'
							});
							this.props.navigator.pop();
						}}>
						<Text style={styles.buttonText}>Zobacz filmy dostepne w tej kategorii</Text>
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
    backgroundColor: '#dddfd4',
  },
	largeText: {
		flex: 1,
		fontSize: 52,
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 20,
		color: '#173e43'
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#3fb0ac'
	},
	button2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#3fbacc'
	},
	buttonText: {
		fontSize: 18,
	}
});

module.exports = Category;
