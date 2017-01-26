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
import { Icon } from 'react-native-elements'

const onButtonPress = () => {
  Alert.alert('Alert dziala ? ');
};



class Book extends Component {
	constructor(props){
		super(props);
		this.state = {
				tytul: this.props.comic.tytul,
				okladka: this.props.comic.okladka,
				opis: this.props.comic.opis,
				polecane: this.props.comic.polecane
		}
	}

  render() {
	const isRecomend = this.state.polecane;

	let polecaneSerce = null;
	if (isRecomend) {
		polecaneSerce = <Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
 />;
	}
    return (
      <View style={styles.container}>
				<Text>{this.state.tytul}</Text>
					<Card
						title={this.state.tytul}
						titleStyle={{fontSize: 24, justifyContent: 'center'}}
						image={{uri: `http://kamilaplug.pl/aplikacjamobilna/`+ this.state.okladka}}
						>
						{polecaneSerce}
						<Text style={{marginBottom: 10}}>
							{this.state.opis}
						</Text>

						<Button
							icon={{name: 'arrow-back'}}
							backgroundColor='#03A9F4'
							fontFamily='Lato'
							buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
							title='Wróć'
							onPress={() => {
									this.props.navigator.pop();
								}}
							 />
					</Card>


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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Book;
