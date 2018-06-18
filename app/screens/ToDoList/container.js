import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ToDoListUI } from './ui';

export class ToDoList extends PureComponent {
    static navigationOptions = {
        title: 'To Do List'
    };

    static displayName = 'ToDoListContainer';

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.newToDo = this.newToDo.bind(this);

        this.state = {
            todos: [
                {
                    text: 'First',
                    done: true
                },
                {
                    text: 'Second',
                    done: false
                }
            ]
        };
    }

    newToDo() {
        const { navigation } = this.props;
        navigation.navigate('newToDo');
    }

    addToDo(todo) {
        this.setState({
            todos: [...this.state.todos, { text: todo, done: false }]
        });
    }

    render() {
        const { todos } = this.state;
        return <ToDoListUI todos={todos} newToDo={this.newToDo} />;
    }
}

export const ToDoListContainer = ToDoList;
