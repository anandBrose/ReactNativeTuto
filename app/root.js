import React from 'react';
import { Component } from 'react';
import { StyleSheet, ScrollView, Dimensions, View, ViewPagerAndroid, Platform} from 'react-native';
import { MyImage } from './pages/image';
import { MyInput } from './pages/input';
import { MyFlatList } from './pages/flatlist';

const styles = StyleSheet.create({
  page:{
    paddingTop: 25,
    flex: 1
  },
  scrollView:{
    flex: 1
  },
  flexBox:{
    height: Dimensions.get('window').height-25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCA'
  },
  box: {
    width: 50,
    height: 50
  }
});


export class ReactNativeTuto extends Component {
  constructor(props){
    super(props);
    this.scrollView = Platform.os === 'ios'? ScrollView : ViewPagerAndroid;
  }
  render() {
    let pic = {
      uri: 'https://s-media-cache-ak0.pinimg.com/originals/84/21/d1/8421d1b53991d565a0e07d0d88cc83f2.jpg'
    };
    let text = "This is some random text...";
    return (
      <View style={styles.page}>
        <ScrollView pagingEnabled={true} bounces={false} horizontal={false} style={styles.scrollView}>
          <MyImage src={pic} desc={text}/>
          <View style={styles.flexBox}>
            <View style={[styles.box,{backgroundColor:'powderblue'}]}></View>
            <View style={[styles.box,{backgroundColor:'skyblue'}]}></View>
            <View style={[styles.box,{backgroundColor:'steelblue'}]}></View>
          </View>
          <MyInput></MyInput>
          <MyFlatList></MyFlatList>
        </ScrollView>
      </View>
    );
  }
}