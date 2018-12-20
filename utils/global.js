
let Dimensions = require('Dimensions');
let {width,height} = Dimensions.get('window');
let Platform = require('Platform');
let StatusBar = require('StatusBar');
let scale = width/750;
let navHeight = Platform.OS === 'ios' ? 128*scale : StatusBar.currentHeight + 40*scale;

const global = {
  width: width,
  height: height,
  scale: scale,
  navHeight: navHeight
}

export default global