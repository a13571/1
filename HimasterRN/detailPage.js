/*需要添加的功能：
最顶部导航栏，应该需要使用Stack.Navigator组件
页面主体部分的背景颜色
页面主体部分有一个button，需要导入
页面底部是一个导航栏，应该需要使用Tab.Navigator组件
 */

import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


function detailPage({navigation}) {
    return (
        <View style={{flex:1, alignItems:"center", justifyContent:'flex-start'}}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details2')}
            >
                <Text style={styles.text}>jump to DetailTab2</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button :{
        height: 40,
        width: 380,
        borderRadius: 5,
        backgroundColor: 'rgb(42,117,237)',
        position: 'relative',
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text :{
        fontSize: 18,
        color: 'white',
    }
})


export default detailPage;




