import React, { PureComponent } from 'react';
import { ActionSheetIOS } from 'react-native';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withToDos } from 'app/hoc/todo';
import { ToDoListUI } from './ui';

export class ToDoList extends PureComponent {
    static navigationOptions = {
        title: 'To Do List'
    };

    static displayName = 'ToDoListContainer';

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func.isRequired
        }).isRequired,
        todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, done: PropTypes.bool })),
        toggleTodo: PropTypes.func,
        deleteTodo: PropTypes.func
    };

    static defaultProps = {
        todos: [],
        toggleTodo: () => {},
        deleteTodo: () => {}
    };

    constructor(props) {
        super(props);
        this.newToDo = this.newToDo.bind(this);
        this.toggleToDo = this.toggleToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.showOptions = this.showOptions.bind(this);
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

    toggleToDo(id) {
        const { toggleTodo } = this.props;
        toggleTodo(id);
    }

    deleteToDo(id) {
        const { deleteTodo } = this.props;
        deleteTodo(id);
    }

    showOptions(id) {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Delete', 'Cancel'],
                cancelButtonIndex: 1,
                destructiveButtonIndex: 0,
                title: 'Delete To Do'
            },
            idx => {
                if (idx === 0) {
                    this.deleteToDo(id);
                }
            }
        );
    }

    render() {
        const { todos } = this.props;
        return (
            <ToDoListUI
                todos={todos}
                newToDo={this.newToDo}
                toggleToDo={this.toggleToDo}
                showOptions={this.showOptions}
            />
        );
    }
}

export const ToDoListContainer = compose(withToDos())(ToDoList);
