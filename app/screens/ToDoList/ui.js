import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'app/components';
import { styled } from './styles';

export class ToDoList extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired
    };

    render() {
        const { styles } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>ToDoList to React Native!</Text>
                <Text style={styles.instructions}>Build React Native app</Text>
                <Text style={styles.instructions}>Profit!</Text>
            </View>
        );
    }
}

export const ToDoListUI = styled(ToDoList);
