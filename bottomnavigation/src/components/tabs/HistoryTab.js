import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HistoryTab extends Component {

    static navigationOptions = {
		title: 'Profile',
	}; 

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>History Screen!</Text>
                <Button
                    title="Go to Profile Screen"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

export default HistoryTab;