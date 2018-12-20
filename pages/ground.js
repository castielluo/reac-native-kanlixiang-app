import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import global from '../utils/global';
export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const id = this.props.navigation.getParam('id', 22)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.nothing} source={require('../assets/images/nothing.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nothing: {
    width: 475*global.scale,
    height:482*global.scale
  }
})