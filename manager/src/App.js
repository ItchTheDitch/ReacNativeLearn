import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
 componentWillMount() {
    const config = {
        apiKey: 'AIzaSyDE3ALWftK353Bai6eE75Qd0YMI02gwWUY',
        authDomain: 'managerrn-976b0.firebaseapp.com',
        databaseURL: 'https://managerrn-976b0.firebaseio.com',
        projectId: 'managerrn-976b0',
        storageBucket: 'managerrn-976b0.appspot.com',
        messagingSenderId: '727680157841'
      };
      firebase.initializeApp(config);
 }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
