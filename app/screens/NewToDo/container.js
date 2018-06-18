import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { NewToDoUI } from './ui';

export class NewToDo extends PureComponent {
    static navigationOptions = {
        title: 'New To Do'
    };

    static displayName = 'NewToDoContainer';

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.state = {
            todo: ''
        };
    }

    updateTodo(text) {
        this.setState({
            todo: text
        });
    }

    addToDo() {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const { ...rest } = this.props;
        const { todo } = this.state;
        return <NewToDoUI {...rest} addToDo={this.addToDo} todo={todo} updateTodo={this.updatetodo} />;
    }
}

export const NewToDoContainer = compose()(NewToDo);
