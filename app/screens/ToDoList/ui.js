import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'app/components';
import { styled } from './styles';

export class ToDoList extends PureComponent {
    static propTypes = {
        newToDo: PropTypes.func,
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired,
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                done: PropTypes.bool
            })
        )
    };

    static defaultProps = {
        newToDo: () => {},
        todos: []
    };

    render() {
        const { newToDo, styles, todos } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    {todos.map(todo => (
                        <Text key={todo.text} style={[styles.todo, todo.done && styles.done]}>
                            {todo.text}
                        </Text>
                    ))}
                </View>
                <Text style={styles.button} onPress={newToDo}>
                    Add todo
                </Text>
            </View>
        );
    }
}

export const ToDoListUI = styled(ToDoList);
