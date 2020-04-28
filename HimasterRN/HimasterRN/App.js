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
import detailPage from "./detailPage";

import PropTypes from 'prop-types';
import detailPage2 from "./detailPage2";


function HomeScreen({navigation}) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
      </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
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
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                  headerShown: false,
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;