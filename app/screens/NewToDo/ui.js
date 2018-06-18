import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'app/components';
import { styled } from './styles';

class NewToDo extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired,
        updateToDo: PropTypes.func,
        todo: PropTypes.string,
        createToDo: PropTypes.func
    };

    static defaultProps = {
        todo: '',
        updateToDo: () => {},
        createToDo: () => {}
    };

    render() {
        const { createToDo, updateToDo, styles, todo } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInput placeholder="Add todo" style={styles.todoInput} onChangeText={updateToDo} value={todo} />
                </View>
                <Text style={styles.button} onPress={createToDo}>
                    Save
                </Text>
            </View>
        );
    }
}

export const NewToDoUI = styled(NewToDo);
