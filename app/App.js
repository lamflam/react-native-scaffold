import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { NewToDo, ToDoList } from 'app/screens';
import { registerTheme } from 'app/theme';

// isMounted is being used by react-native internal navigation, but has
// recently been deprecated by react. Safe to ignore for now, but hopefully
// will be fixed soon and this can be removed.
//
// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

registerTheme();

const RootStack = createStackNavigator(
    {
        toDoList: {
            screen: ToDoList,
            title: 'To Do List'
        },
        newToDo: {
            screen: NewToDo,
            title: 'New To Do'
        }
    },
    {
        initialRouteName: 'toDoList'
    }
);

export class App extends Component {
    render() {
        return <RootStack />;
    }
}
