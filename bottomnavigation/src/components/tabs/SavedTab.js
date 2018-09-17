import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SavedTab extends Component {

    static navigationOptions = {
		title: 'Saved',
	}; 

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Saved Screen!</Text>
            </View>
        );
    }
}

export default SavedTab;