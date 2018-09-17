import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AddTab extends Component {

    static navigationOptions = {
		title: 'Add',
	}; 

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Add Screen</Text>
            </View>
        );
    }
}

export default AddTab;