// Index.ios.js - place code in here for IOS!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';

// Component
import Header from './src/components/header';

// Create a component
const App = () => {
    return (
        <Header headerText={'Albums'}/>
    );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);