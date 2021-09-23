import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

// import components from './components/screen';
import Screen from './components/Screen';
import {Provider} from 'react-redux'
import store from './store/Index';

class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
      <View>
      <Screen/>
      </View>
      </Provider>
    );
  }
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
