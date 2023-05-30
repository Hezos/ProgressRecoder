import 'react-native-gesture-handler';
import 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, TextInput, View,  Button, Alert, PermissionsAndroid, Platform } from 'react-native';
import React, { Component, FunctionComponent, useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
//div is not allowed for some reason
import { SafeAreaView } from 'react-native-safe-area-context';
//import { FileSystem } from 'expo';
//import { FSFEFS } from 'expo-file-system';
import RNFS from 'react-native-fs'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
//FileSystem from rnfsa
import { color, round } from 'react-native-reanimated';
import { FileSystem, Dirs } from 'react-native-file-access';

interface ITest{ }

const TestScreen: FunctionComponent<ITest> = ({}) =>{
  return(
    
    <SafeAreaView style={[styles.container]}>
    <Text style={[{color:'white'}]}> You switched to test view. </Text>
  </SafeAreaView>
  );  
}

export default function App() {

  var [inputName, setInputName] = useState<string>("");
  var [inputNumber, setPage] = useState<Number>(0);
  var [message, setMessage] = useState<string>("Message goes here");

  var pageCount:number;

  function SetPage(targetValue: number): void
  {
    setPage(targetValue);
    pageCount = Number(inputNumber);
  }

  //const Tab = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('1', "Test");
      Alert.prompt('Data was written');
    } catch (e) {
      Alert.alert(String(e));
    }
  }

   function Logging(): void{
    setMessage('Button was clicked');
    var DirPath: string = Dirs.DocumentDir;
    //DocumentDir undefined   
 // RNFS.writeFile(Dirs.CacheDir +'/Data.json', '{}', 'utf8').then((successs)=>{Alert.alert('File was written');}).catch((error) => {Alert.alert(error.message);});

  
    
    try{
      //var data:string = String(FileSystem.readFile('Data.json'));
      //setMessage(data);
      //const path = '/data.json';
      //Cannot read property of null exception
      var path:string = 'test.txt';
      FileSystem.writeFile(path,'Testing Files','utf8'); 
    }catch(exception){
      Alert.alert(String(exception));
    }    
  }

  /*
  const saveData = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    } catch (err) {
      console.warn(err);
    }
    const readGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE); 
    const writeGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    if(!readGranted || !writeGranted) {
      console.log('Read and write permissions have not been granted');
      return;
    }
    var path = `${RNFS.ExternalStorageDirectoryPath}/MyApp`;
    RNFS.mkdir(path);
    path += '/data.json';
    RNFS.writeFile(path, JSON.stringify('{}'), 'utf8')
      .then((success) => {
        console.log('Success');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  */

  function AddBookPage(){
    return (
      <View style={[styles.container]} >
      <Text style={[{color:'white'}, {fontSize: 20}]}>Components go here!</Text>     
        <TextInput placeholderTextColor={'white'} style={[{color:'red'}, {fontSize: 15}]}
         placeholder='Name of a book' value={inputName} onChangeText={setInputName} />
         <Text></Text>
        <Text style={[{color:'white'}, {fontSize: 20}]}> How far are you in your book? </Text>
        <NumericInput textColor={'white'}  onChange={value => {SetPage(value)}}></NumericInput>
        <Text  style={[{color:'white'}]}> {message} </Text>
        <Button  title="Press me" onPress={() => { Logging() } } color='purple' />
        </View>        
    );
  }

  return (
    
    <NavigationContainer >
              <StatusBar style="auto"  hidden={false} backgroundColor='purple' />
      <Tab.Navigator initialRouteName='Test'  screenOptions={({}) => ({ tabBarActiveBackgroundColor:'purple',
       tabBarInactiveBackgroundColor:'black' })} >
        <Tab.Screen  name='Test' component={TestScreen} options={{  headerStyle:{  backgroundColor:'black' }, headerTintColor:'purple' }}/>
        <Tab.Screen name='Add a book'  component={AddBookPage} options={{  headerStyle:{  backgroundColor:'black' }, headerTintColor:'purple' }}/>
      </Tab.Navigator>      
    </NavigationContainer>
        /*
  <View style={[styles.container]} >
    <Text style={[{color:'white'}, {fontSize: 20}]}>Components go here!</Text>     
      <TextInput placeholderTextColor={'white'} style={[{color:'red'}, {fontSize: 15}]}
       placeholder='Name of a book' value={inputName} onChangeText={setInputName} />
       <Text></Text>
      <Text style={[{color:'white'}, {fontSize: 20}]}> How far are you in your book? </Text>
      <NumericInput textColor={'white'}  onChange={value => {SetPage(value)}}></NumericInput>
            <Pressable  onPress={() => {}}>
        <Text style={[{color:'white'}, {fontSize: 15}]}> Click me! </Text>
      </Pressable>
      
      <StatusBar style="auto" />
 
      </View>  
    */
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackBackGround:{
    backgroundColor: 'black',
  },
  purpleBackGround:{
    backgroundColor:'purple'
  }
});
