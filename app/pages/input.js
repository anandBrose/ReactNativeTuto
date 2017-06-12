import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  inputComponent: {
    height: Dimensions.get('window').height-25,
    padding:5
  },
  topPadding:{
    top: 50
  }
});



export class MyInput extends Component{
  constructor(props) {
    super(props);
    this.state = {text: ''};
    let me = this;
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
   this.setState((prevState)=>{
    prevState.text+="🍕";
    return prevState;
   });
  }
  render (){
    return (
      <View style={styles.inputComponent}>
        <TextInput style={{width:"100%",height:50}} value={this.state.text} placeholder="Type here, Take a Break inbetween" 
          onChangeText={(text)=>{ this.setState({text})}}></TextInput>
        <Text style={{height:'auto'}}>{this.state.text.split(" ").join('<Space>')}</Text>
        <Button onPress={this.onClick} title="Have some pizza"></Button>
      </View>
    )
  };
}