/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class WelcomeUI extends PureComponent {
    static propTypes = {
        toNextScreen: PropTypes.func.isRequired
    };

    render() {
        const { toNextScreen } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native Scaffolding!</Text>
                <Text onPress={toNextScreen} style={styles.instructions}>
                    Go to my To Do List
                </Text>
            </View>
        );
    }
}
