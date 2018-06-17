/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Welcome, Welcome2 } from 'app/screens';

// isMounted is being used by react-native internal navigation, but has
// recently been deprecated by react. Safe to ignore for now, but hopefully
// will be fixed soon and this can be removed.
//
// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const RootStack = createStackNavigator(
    {
        welcome: {
            screen: Welcome
        },
        welcome2: {
            screen: Welcome2
        }
    },
    {
        initialRouteName: 'welcome'
    }
);

export class App extends Component {
    render() {
        return <RootStack />;
    }
}
