import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styled } from './styles';

export class Welcome extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired,
        toNextScreen: PropTypes.func.isRequired
    };

    render() {
        const { styles, toNextScreen } = this.props;
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

export const WelcomeUI = styled(Welcome);
