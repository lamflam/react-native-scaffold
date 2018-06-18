export class ToDo {
    static schema = {
        name: 'ToDo',
        primaryKey: 'id',
        properties: {
            id: { type: 'string' },
            text: { type: 'string' },
            done: { type: 'bool', default: false }
        }
    };
}
