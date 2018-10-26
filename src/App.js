import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import { Provider } from 'react-redux'
import TabBarList from './TabBarList'

import confgureStore from './configureStore'
import configureStore from './configureStore';

let store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
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


