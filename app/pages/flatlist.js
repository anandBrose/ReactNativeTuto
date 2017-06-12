import React, {Component} from 'react';
import {View, FlatList, Text, Dimensions, StyleSheet, Alert} from 'react-native';

const styles = StyleSheet.create({
  flatList: {
    height: Dimensions.get('window').height-25,
    padding:5
  },
  item: {
  	paddingVertical: 10,
  	borderBottomWidth: 1,
  	borderColor: "lightgray"
  },
  itemText: {
    fontFamily: 'Avenir',
    fontWeight: "bold"
  }
});

const list = [
  { key: 'Devin' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
]

export class MyFlatList extends Component{
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount(){
    this.getMoviesList().then((movies) => {
      this.setState({
        list: movies
      })
    })
  }
  _keyExtractor = (item, index) => item.title;

  async getMoviesList(){
    try{
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      return (await response.json()).movies;
    }catch(e){
      Alert.alert("error"+e);
    }
  }
	render(){
		return (
			<FlatList data={this.state.list} style={styles.flatList} keyExtractor={this._keyExtractor} renderItem = {({item})=>
					<View style={styles.item}>
						<Text style={styles.itemText}>{item.title}</Text>
					</View>
				}
			/>
		)
	}
}