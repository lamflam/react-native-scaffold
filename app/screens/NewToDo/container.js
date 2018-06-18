import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withCreateToDo } from 'app/hoc/todo';
import { NewToDoUI } from './ui';

export class NewToDo extends PureComponent {
    static navigationOptions = {
        title: 'New To Do'
    };

    static displayName = 'NewToDoContainer';

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func.isRequired
        }).isRequired,
        createTodo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.createToDo = this.createToDo.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
        this.state = {
            todo: ''
        };
    }

    updateToDo(text) {
        this.setState({
            todo: text
        });
    }

    createToDo() {
        const { createTodo, navigation } = this.props;
        const { todo } = this.state;
        createTodo(todo);
        navigation.goBack();
    }

    render() {
        const { ...rest } = this.props;
        const { todo } = this.state;
        return <NewToDoUI {...rest} createToDo={this.createToDo} todo={todo} updateToDo={this.updateToDo} />;
    }
}

export const NewToDoContainer = compose(withCreateToDo())(NewToDo);
