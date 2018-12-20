import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import global from '../utils/global';

export default class My extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={styles.setting}>
          <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Details1')}>
            <Ionicons name="ios-settings" size={30} color={'#666'} />
          </TouchableOpacity>
        </View>
        <View style={styles.user}>
          <Image style={styles.avatar} source={require('../assets/images/avatar.jpg')} />
          <Text style={styles.nickname}>泽学</Text>
        </View>
        <View style={styles.notifyBar}>
          <Ionicons name="ios-notifications-outline" size={30} color="#666" style={{flex:1}} />
          <Text style={{flex:5}}>通知中心</Text>
          <Ionicons name="ios-arrow-round-forward" size={30} color="#666" style={{flex:1}} />
        </View>
        <View style={[styles.iconRow, styles.borderB]}>
          <View style={styles.iconBox}>
            <Ionicons name="md-copy" size={35} color={'#212121'} />
            <Text style={styles.iconText}>交易记录</Text>
          </View>
          <View style={styles.iconBox}>
            <Ionicons name="md-gift" size={35} color={'#212121'} />
            <Text style={styles.iconText}>兑换礼券</Text>
          </View>
          <View style={styles.iconBox}>
            <Ionicons name="ios-star-outline" size={35} color={'#212121'} />
            <Text style={styles.iconText}>收藏</Text>
          </View>
        </View>
        <View style={styles.iconRow}>
          <View style={styles.iconBox}>
            <Ionicons name="ios-tablet-portrait" size={35} color={'#212121'} />
            <Text style={styles.iconText}>意见反馈</Text>
          </View>
          <View style={styles.iconBox}>
            <Ionicons name="ios-heart-empty" size={35} color={'#212121'} />
            <Text style={styles.iconText}>推荐给好友</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setting: {
    width: 750*global.scale,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    padding: 25*global.scale,
    flexDirection: 'row'
  },
  user: {
    width: 750*global.scale,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
  avatar: {
    width:200*global.scale,
    height:200*global.scale,
    borderRadius:100*global.scale,
    marginBottom: 20*global.scale
  },
  nickname: {
    fontSize: 30*global.scale
  },
  notifyBar: {
    width: 750*global.scale,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee',
    flexDirection: 'row',
    padding: 25*global.scale,
    marginTop: 30*global.scale,
    marginBottom:100*global.scale,
  },
  iconRow: {
    width:700*global.scale,
    marginLeft: 25*global.scale,
    flexDirection: 'row'
  },
  borderB: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
    paddingBottom: 50*global.scale,
    marginBottom: 50*global.scale
  },
  iconBox: {
    width:233.3*global.scale,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconImage: {
    width:233.33*global.scale,
    height:233.33*global.scale
  },
  iconText: {
    fontSize:24*global.scale,
    color:'#525252',
    marginTop:20*global.scale
  }
})