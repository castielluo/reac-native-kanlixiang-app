import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './pages/home';
import ListScreen from './pages/ground';
import My from './pages/my';
import Test from './pages/test';
import Test1 from './pages/test1';
// import BarcodeTest from './pages/BarcodeTest';
import AcQrcode from './pages/AcQrcode';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: Test,
},{
  headerMode:'none',
});

const ListStack = createStackNavigator({
  ListDefault: ListScreen,
  Details: Test,
});

const MyStack = createStackNavigator({
  MyDefault: My,
  Details: Test,
});


const TabNavigator = createBottomTabNavigator({
  首页: HomeStack,
  订阅: ListStack,
  我的: MyStack
},
{
  initialRouteName: "首页",
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === '首页') {
        iconName = `ios-home${focused ? '' : ''}`;
      } else if (routeName === '订阅') {
        iconName = `ios-paper${focused ? '' : ''}`;
      } else if (routeName === '我的') {
        iconName = `ios-person${focused ? '' : ''}`;
      }
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const RootNavigator = createStackNavigator({
  Index: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Details1: Test1,
  Scan: Test1,
  Scan1: AcQrcode
})
export default createAppContainer(RootNavigator);
