import { v4 } from 'uuid';

class Todo {
    constructor() {
        this.todos = [];
    };
    getAll = () => {
        return this.todos;
    };
    getOne = (id) => {
        return this.todos.find(elem => elem.id === id);
    };
    create = (data) => {
        let todo = {
            id: v4(),
            todo: data,
            time: new Date()
        };
        this.todos.push(todo);
        return 'Created successfully!!!';
    };
    update = (id, new_todo) => {
        this.todos.find(elem => elem.id === id).todo = new_todo;
        return 'Updated successfully!!!';
    };
    delete = (id) => {
        this.todos = this.todos.filter(elem => elem.id !== id);
        return 'Deleted seccessfully!!!';
    };
};

export default new Todo;