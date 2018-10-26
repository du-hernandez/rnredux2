import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducers from './reducers' // Automáticamente carga el archivo 'index.js'
import TabBarList from './TabBarList'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers)} >
        <View style={{ flex: 1 }}>
          <TabBarList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


