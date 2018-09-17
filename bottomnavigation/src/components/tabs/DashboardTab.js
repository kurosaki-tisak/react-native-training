import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DashboardTab extends Component {
    
    static navigationOptions = {
		title: 'Dashbord',
	}; 

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Dashboard tab screen</Text>
                <Button
                    title="Go to Dashboard details screen"
                    onPress={() => this.props.navigation.navigate('DashboardDetail')}
                />
            </View>
        );
    }
}

export default DashboardTab;
