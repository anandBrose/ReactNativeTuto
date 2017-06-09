
import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

export default class ReactNativeTuto extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{top:25, backgroundColor: 'red', alignItems: 'center'}}>
        <MyImage src={pic} desc="Some Annotation"/>
      </View>
    );
  }
}

export class MyImage extends Component{
  render(){
    return (
      <View>
        <Image source={this.props.src} style={{width: 193, height: 110}}/>
        <Text>{this.props.desc}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeTuto', () => ReactNativeTuto);