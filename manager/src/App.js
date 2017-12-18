import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
               <LoginForm />
            </Provider>
        );
    }
}

export default App;
