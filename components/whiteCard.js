import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import global from '../utils/global'

export default class WhiteCard extends React.Component{
  render() {
    return (
      <View style={styles.whiteTab}>
        <Text style={{fontSize:20, color:'#212121'}}>{this.props.title}</Text>
        <View style={styles.mediaBox}>
          <Image style={styles.mediaImage} source={this.props.img} />
          <View style={styles.midText}>
            <Text style={styles.midText0} numberOfLines={1}>{this.props.text0}</Text>
            <Text style={styles.midText1}>{this.props.text1}</Text>
          </View>
          <Image style={styles.mediaPlayImage} source={require('../assets/images/play.jpg')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  whiteTab: {
    width:700*global.scale,
    padding:50*global.scale,
    backgroundColor:'white'
  },
  mediaBox:{
    width:600*global.scale,
    backgroundColor:'rgb(247,251,254)',
    height:130*global.scale,
    marginTop:40*global.scale,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  mediaImage:{
    width:80*global.scale,
    height:100*global.scale
  },
  mediaPlayImage:{
    width:60*global.scale,
    height:80*global.scale
  },
  midText:{
    width:420*global.scale
  },
  midText0:{
    width:420*global.scale,
    fontSize:34*global.scale,
    color:'#212121'
  },
  midText1:{
    width:420*global.scale,
    fontSize:24*global.scale,
    color:'#666'
  }
})