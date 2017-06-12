import React from 'react';
import { Component } from 'react';
import { Image, Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageComponent:{
    height: Dimensions.get('window').height-25,
  },
  imageSize: {
    height: 100,
    width: "100%"
  }
});

export class MyImage extends Component{
  constructor(props){
    super(props);
    this.state = {colorIt : true};
    setInterval(() => {
      this.setState((previousState)=>{
        previousState.colorIt = !previousState.colorIt;
        return previousState;
      });
    },1000);
  }
  render(){
    return (
      <View style={styles.imageComponent}>
        <Image source={this.props.src} style={styles.imageSize}/>
        <Text style={{fontFamily: 'Avenir', padding: 5}}>{this.props.desc}{this.state.colorIt?" tada!! ":""}</Text>
      </View>
    );
  }
}