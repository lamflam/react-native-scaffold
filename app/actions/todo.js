export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

export function createTodo(text) {
    return {
        type: CREATE_TODO,
        payload: { text }
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: { id }
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: { id }
    };
}

export function clearTodos() {
    return {
        type: CLEAR_TODOS
    };
}
