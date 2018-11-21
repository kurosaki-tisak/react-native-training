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
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
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