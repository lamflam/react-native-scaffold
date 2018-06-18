import uuid from 'uuid/v4';
import { CLEAR_TODOS, CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from 'app/actions/todo';

export default function todoWriter(realm, action) {
    if (action.type === CREATE_TODO) {
        const { text } = action.payload;
        realm.create('ToDo', {
            id: uuid(),
            text
        });
    } else if (action.type === TOGGLE_TODO) {
        const { id } = action.payload;
        const todos = realm.objects('ToDo').filtered(`id = "${id}"`);
        if (todos.length === 1) {
            const todo = todos[0];
            todo.done = !todo.done;
        }
    } else if (action.type === DELETE_TODO) {
        const { id } = action.payload;
        const todos = realm.objects('ToDo').filtered(`id = "${id}"`);
        if (todos.length === 1) {
            realm.delete(todos);
        }
    } else if (action.type === CLEAR_TODOS) {
        realm.delete(realm.objects('ToDo'));
    }
}
