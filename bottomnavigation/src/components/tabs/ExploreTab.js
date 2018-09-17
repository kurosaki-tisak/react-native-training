import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExploreTab extends Component {

    static navigationOptions = {
		title: 'Explore',
	}; 

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Explore</Text>
            </View>
        );
    }
}

export default ExploreTab;