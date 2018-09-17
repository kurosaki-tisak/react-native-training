import React from 'react';
import Icon from 'react-native-ionicons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Components
import DashboardTab from './DashboardTab';
import DashboardDetailScreen from '../DashboardDetailScreen'
import ExploreTab from './ExploreTab';
import AddTab from './AddTab';
import SavedTab from './SavedTab';
import HistoryTab from './HistoryTab';
import ProfileScreen from '../ProfileScreen';

const DashboardStack = createStackNavigator({
    Dashboard: { screen: DashboardTab },
    DashboardDetail: { screen: DashboardDetailScreen }
})

const HistoryStack = createStackNavigator({
    History: { screen: HistoryTab },
    Profile: { screen: ProfileScreen }
})

const TabsNav = createBottomTabNavigator(
    {
        Dashboard: { screen: DashboardStack },
        Explore: { screen: ExploreTab },
        Add: { screen: AddTab },
        Saved: { screen: SavedTab },
        Profile: { screen: HistoryStack }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName == 'Dashboard') {
                    iconName = `ios-globe${focused ? '' : '-outline'}`;
                } else if (routeName == 'Explore') {
                    iconName = `ios-map${focused ? '' : '-outline'}`;
                } else if (routeName == 'Add') {
                    iconName = `ios-add-circle${focused ? '' : '-outline'}`;
                } else if (routeName == 'Saved') {
                    iconName = `ios-bookmark${focused ? '' : '-outline'}`;
                } else {
                    iconName = `ios-contact${focused ? '' : '-outline'}`;
                }

                return (<Icon name={iconName} size={30} color={tintColor}></Icon>);
            },
        }),

        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        },
    }
);

const Tabs = () => {
    return <TabsNav />
}

export default Tabs;
