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


class Book extends Component {


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
				<Button
				  onPress={onButtonPress}
				  title="Button PPP"
				  color="#841584"
				  accessibilityLabel="Button"
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Book;
