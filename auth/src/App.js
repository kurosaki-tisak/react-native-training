import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

// Component
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBgb-L-avzHKy8_yYaobLl1epgSb1_RSxo",
            authDomain: "authentication-7beb7.firebaseapp.com",
            databaseURL: "https://authentication-7beb7.firebaseio.com",
            projectId: "authentication-7beb7",
            storageBucket: "authentication-7beb7.appspot.com",
            messagingSenderId: "733465557598"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    reanderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ alignSelf: "center", flexDirection: "row" }}>
                        <Button
                            onPress={() => firebase.auth().signOut()}>
                            Log out
                         </Button>
                    </View>
                );

            case false:
                return <LoginForm />;

            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.reanderContent()}
            </View>
        );
    };
};

export default App;