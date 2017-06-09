import React, {Component} from 'react';
import {View, FlatList, Text, Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flatList: {
    width: Dimensions.get('window').width,
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
	render(){
		return (
			<FlatList data={list} style={styles.flatList} renderItem = {({item})=>
					<View style={styles.item}>
						<Text style={styles.itemText}>{item.key}</Text>
					</View>
				}
			/>
		)
	}
}