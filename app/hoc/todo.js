import { bindActionCreators } from 'redux';
import { realmConnect } from 'realm-react-redux';
import { clearTodos, createTodo, deleteTodo, toggleTodo } from 'app/actions/todo';

function mapPropsToQueries(realm) {
    return [realm.objects('ToDo')];
}

function mapQueriesToProps([todos]) {
    return {
        todos: todos.map(t => ({ id: t.id, text: t.text, done: t.done }))
    };
}

function mapRealmDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            createTodo,
            toggleTodo,
            deleteTodo,
            clearTodos
        },
        dispatch
    );
}

export function withToDos() {
    return realmConnect(mapPropsToQueries, mapQueriesToProps, mapRealmDispatchToProps);
}

// This export provides the realm actions but not the actual todos. You could
// also reuse "withToDos()" above, but you'd end up rerendering any time
// a todo was changed even if you aren't displaying them.
export function withCreateToDo() {
    return realmConnect(undefined, undefined, dispatch => bindActionCreators({ createTodo }, dispatch));
}
