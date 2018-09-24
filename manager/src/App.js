import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import firebase from 'firebase';

// Components
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDMjXLFWJEseOYmX0LIKp5oNFmo1ztn0T8',
            authDomain: 'manager-b86b7.firebaseapp.com',
            databaseURL: 'https://manager-b86b7.firebaseio.com',
            projectId: 'manager-b86b7',
            storageBucket: 'manager-b86b7.appspot.com',
            messagingSenderId: '37780704670'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}

export default App;