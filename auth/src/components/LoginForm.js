import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

//Components
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', loading: false, errorMsg: '' };

    onButtonPress() {
        const { email, password } = this.state

        this.setState({ loading: true, errorMsg: '' });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            errorMsg: ''
        });
    }

    onLoginFail() {
        this.setState({
            loading: false,
            errorMsg: 'Authentication Failed.'
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="user@email.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeHolder="password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.errorMsg}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;