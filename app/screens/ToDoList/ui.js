/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class ToDoListUI extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>ToDoList to React Native!</Text>
                <Text style={styles.instructions}>Build React Native app</Text>
                <Text style={styles.instructions}>Profit!</Text>
            </View>
        );
    }
}
