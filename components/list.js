import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import global from '../utils/global'

export default class list extends React.Component{
  render() {
    return(
      <View style={styles.list}>
        <View style={styles.listLeft}>
          <Text style={styles.listText0}>{this.props.author}</Text>
          <Text style={styles.listText1}>{this.props.title}</Text>
          <Text style={styles.listText2} numberOfLines={1}>{this.props.secTitle}</Text>
          <Text style={styles.listText3}>￥{this.props.price}</Text>
        </View>
        <Text style={styles.listMid}>
          {this.props.order}
        </Text>
        <Image style={styles.listRight} source={this.props.img} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list:{
    width:750*global.scale,
    padding:25*global.scale,
    flexDirection:'row',
    borderBottomWidth: 1,
    borderStyle:'solid',
    borderColor:'#eee'
  },
  listLeft:{
    width:430*global.scale,
  },
  listText0:{
    width:430*global.scale,
    fontSize:30*global.scale,
    color:'#999',
    marginBottom: 20*global.scale
  },
  listText1:{
    width:430*global.scale,
    fontSize:38*global.scale,
    color:'#212121',
    marginBottom: 20*global.scale
  },
  listText2:{
    width:430*global.scale,
    fontSize:26*global.scale,
    color:'#999',
    marginBottom: 20*global.scale
  },
  listText3:{
    width:430*global.scale,
    fontSize:36*global.scale,
    color:'red',
    marginBottom: 20*global.scale
  },
  listMid:{
    width:89*global.scale,
    fontSize:60*global.scale,
    fontWeight:'bold'
  },
  listRight:{
    width:180*global.scale,
    height:280*global.scale
  }
})