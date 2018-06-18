import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'app/components';
import { styled } from './styles';

class NewToDo extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired,
        updateTodo: PropTypes.func,
        todo: PropTypes.string,
        addToDo: PropTypes.func
    };

    static defaultProps = {
        todo: '',
        updateTodo: () => {},
        addToDo: () => {}
    };

    render() {
        const { addToDo, updateTodo, styles, todo } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInput placeholder="Add todo" style={styles.todoInput} onChangeText={updateTodo} value={todo} />
                </View>
                <Text style={styles.button} onPress={addToDo}>
                    Save
                </Text>
            </View>
        );
    }
}

export const NewToDoUI = styled(NewToDo);
