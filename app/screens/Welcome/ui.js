/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, View } from 'react-native';
import { styles } from './styles';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu'
});

export class WelcomeUI extends PureComponent {
    static propTypes = {
        toNextScreen: PropTypes.func.isRequired
    };

    render() {
        const { toNextScreen } = this.props;
        return (
            <View style={styles.container}>
                <Text onPress={toNextScreen} style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}
