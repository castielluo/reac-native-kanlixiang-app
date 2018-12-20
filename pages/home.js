import React from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import SearchInput from 'teaset/components/SearchInput/SearchInput';
import Carousel from 'teaset/components/Carousel/Carousel';
import Toast from 'teaset/components/Toast/Toast';
import global from '../utils/global';
import TabCard from '../components/tabCard'
import WhiteCard from '../components/whiteCard'
import MyList from '../components/list'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor (props) {
    super(props)
  }
  _toDetails = ()=> {
    Toast.message('Toast message');
    this.props.navigation.navigate('Scan')
  }
  render() {
    this.state = {
      valueCustom: ''
    }
    return (
      <View style={styles.container}>
        <SearchInput style={styles.searchInput} inputStyle={{color: '#8a6d3b', fontSize: 18}} iconSize={15}  placeholder='' placeholderTextColor='#aaa' onChangeText={text => this.setState({valueCustom: text})} />
        <ScrollView>
          <Carousel style={styles.bannerBox}>
            <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Scan1')}>
              <Image style={styles.banner} resizeMode='cover' source={require('../assets/images/banner0.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Scan1')}>
              <Image style={styles.banner} resizeMode='cover' source={require('../assets/images/banner0.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Scan1')}>
              <Image style={styles.banner} resizeMode='cover' source={require('../assets/images/banner0.jpg')} />
            </TouchableOpacity>
          </Carousel>
          <View style={styles.titleBox}>
            <Text style={styles.titleLabel}>耳界</Text>
            <View style={styles.btline}></View>
          </View>
          <View style={styles.erjieTabsBox}>
          <ScrollView horizontal showsHorizontalScrollIndicator={showScroll}>
            <View style={styles.columnTabs}>
              <TabCard onAlert={this._toDetails} title="开卷八分钟" source={require('../assets/images/tab_img0.jpg')}></TabCard>
              <TabCard onAlert={this._toDetails} title="一千零一夜·出走季" source={require('../assets/images/tab_img1.jpg')}></TabCard>
            </View>
            <View style={styles.columnTabs}>
              <TabCard onAlert={this._toDetails} title="看理想电台" source={require('../assets/images/tab_img2.jpg')}></TabCard>
              <TabCard onAlert={this._toDetails} title="圆桌派" source={require('../assets/images/tab_img3.jpg')}></TabCard>
            </View>
            <View style={styles.columnTabs}>
              <TabCard onAlert={this._toDetails} title="开卷八分钟" source={require('../assets/images/tab_img0.jpg')}></TabCard>
              <TabCard onAlert={this._toDetails} title="一千零一夜·出走季" source={require('../assets/images/tab_img1.jpg')}></TabCard>
            </View>
          </ScrollView>
          </View>
          <View style={styles.greyBg}>
            <WhiteCard title="艺术他独立了，不用为其他的事情服务了，为将故事、为教会、为社会、为贵族、为道德说教等等，这个是最重要的。" img={require('../assets/images/matong.jpg')} text0="04.塞尚《塞尚夫人像》，她为什么那么冷漠" text1="10件作品里的西方艺术史·王瑞云"></WhiteCard>
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.titleLabel}>博雅</Text>
            <View style={styles.btline}></View>
          </View>
          <MyList author="徐贲" title="自由的黎明：文艺复兴经典" secTitle="世界经典通读计划·第一季，从你的全世界路过" price="98.00" img={require('../assets/images/list0.jpg')} order="01"></MyList>
          <MyList author="徐英瑾" title="暧昧：给日本脑洞一个科学解释" secTitle="超越《菊与刀》，用哲学看日本" price="28.00" img={require('../assets/images/list1.jpg')} order="02"></MyList>
          <MyList author="焦元溥" title="一听就懂的古典音乐史" secTitle="资深乐评人带你共享120场音乐会" price="198.00" img={require('../assets/images/list2.jpg')} order="03"></MyList>
          </ScrollView>
      </View>
    );
  }
}


const showScroll = false
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexDirection: 'column'
  },
  navigationBar: {
    backgroundColor: 'red',
    width:global.width,
    height:global.navHeight,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#eee',
    borderColor: '#8a6d3b',
    width: 700*global.scale,
    marginTop: 20*global.scale,
    marginLeft: 25*global.scale,
    marginBottom:20*global.scale,
    borderWidth:0,
    borderRadius:20
  },
  banner: {
    width:700*global.scale,
    height: 350*global.scale,
    marginLeft: 25*global.scale,
    marginTop:30*global.scale
  },
  bannerBox:{
    height:350*global.scale
  },
  titleBox: {
    width: 700*global.scale,
    marginLeft: 25*global.scale,
    flex: 1,
    flexDirection:'row',
    marginTop:80*global.scale
  },
  titleLabel: {
    height:50*global.scale,
    fontSize:36*global.scale,
    fontWeight: 'bold'
  },
  btline: {
    flex:5,
    height: 1,
    backgroundColor: '#eee',
    marginTop:50*global.scale
  },
  erjieTabsBox: {
    marginLeft: 25*global.scale,
    height:360*global.scale,
    marginTop:40*global.scale
  },
  columnTabs: {
    width: 350*global.scale,
    height:360*global.scale,
    flex:1
  },
  greyBg:{
    width:750*global.scale,
    padding:25*global.scale,
    backgroundColor:'rgb(240,240,240)'
  }
})