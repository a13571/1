/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen'

import detailPage from "./detailPage";
import PropTypes from 'prop-types';
import detailPage2 from "./detailPage2";
import HomePage from "./homePage";
import {TouchableItem} from "@react-navigation/stack/src/views/TouchableItem";


const Stack = createStackNavigator();
function DetailScreen() {
  return (
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
            name="Details"
            component={detailPage}
            options={{
              title: 'DetailTab1',
              headerLeft: null,
            }} />
        <Stack.Screen
            name="Details2"
            component={detailPage2}
            options={{ title: 'DetailTab2' }} />
      </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomePage} />
                    <Tab.Screen name="Details" component={DetailScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }

}
