import todo_model from '../model/todo.model';

const todo_controller = {
    
    getAll: (req, res) => {
        res.status(200).send(todo_model.getAll());
    },
    getOne: (req, res) => {
        res.status(200).send(todo_model.getOne(req.params.id));
    },
    create: (req, res) => {
        res.status(200).send(todo_model.create(req.body.todo));
    },
    update: (req, res) => {
        res.status(200).send(todo_model.update(req.params.id, req.body.todo));
    },
    delete: (req, res) => {
        res.status(200).send(todo_model.delete(req.params.id));
    } 
};

module.exports = todo_controller;