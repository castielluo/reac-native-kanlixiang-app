import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import global from '../utils/global';

export default class TabCard extends React.Component{
  render() {
    return (<View>
      {/* <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Details1')}> */}
      <TouchableOpacity  onPress={()=> this.props.onAlert()}>
        <View style={styles.tabs}>
          <Text>{this.props.title}</Text>
        </View>
        <Image  style={styles.tabsImage} source={this.props.source} />
      </TouchableOpacity>
    </View>)
  }
}

const styles = StyleSheet.create({
  tabs:{
    width:320*global.scale,
    height:120*global.scale,
    marginRight:30*global.scale,
    marginTop: 20*global.scale,
    backgroundColor:'rgb(245,245,245)',
    marginBottom:40*global.scale,
    padding:30*global.scale,
    paddingRight:135*global.scale,
    overflow: 'visible'
  },
  tabsImage:{
    position:'absolute',
    left: 200*global.scale,
    width:100*global.scale,
    height:140*global.scale,
    overflow: 'visible',
    /* top: -(27*global.scale) */
  }
})