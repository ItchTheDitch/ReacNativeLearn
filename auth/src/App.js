import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDPQ7bVxqwtk1W1wMvy7-35LVU5PKgxNqs',
            authDomain: 'authenticationreact-66d5d.firebaseapp.com',
            databaseURL: 'https://authenticationreact-66d5d.firebaseio.com',
            projectId: 'authenticationreact-66d5d',
            storageBucket: 'authenticationreact-66d5d.appspot.com',
            messagingSenderId: '623671231253'
          });
          firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  this.setState({ loggedIn: true });
              } else {
                  this.setState({ loggedIn: false });
              }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button whenPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );

            case false:
                return <LoginForm />;
            default:
             return (
                 <CardSection>
                    <Spinner size="large" />
                </CardSection>
            );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
