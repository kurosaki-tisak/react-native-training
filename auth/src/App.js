import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

// Component
import { Header } from './components/common';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBgb-L-avzHKy8_yYaobLl1epgSb1_RSxo",
            authDomain: "authentication-7beb7.firebaseapp.com",
            databaseURL: "https://authentication-7beb7.firebaseio.com",
            projectId: "authentication-7beb7",
            storageBucket: "authentication-7beb7.appspot.com",
            messagingSenderId: "733465557598"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>Auth</Text>
            </View>
        );
    };
};

export default App;