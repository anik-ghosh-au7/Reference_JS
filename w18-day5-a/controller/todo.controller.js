import Todo from '../model/todo.model';
import { validationResult } from 'express-validator';

const todo_controller = {
    
    getAll: (req, res) => {
        Todo.find((err, data) => {
            if (err) {
                // Internal server error
                res.status(500).send({msg: "Internal Server Error"});
            } else {
                // OK
                if (data.length !== 0) {
                    // ok
                    res.status(200).send(data)
                }
                else {
                    // no data
                    res.status(204).send(data);
                }
            };
        });
    },
    getOne: (req, res) => {
        let id = req.params.id;
        Todo.find({_id: id}, (err, data) => {
            if (err) {
                // Internal server error
                res.status(500).send({msg: "Internal Server Error"});
            } else {
                // OK
                if (data.length !== 0) {
                    // ok
                    res.status(200).send(data);
                }
                else {
                    // no data
                    res.status(204).send(data);
                }
            };
        });
    },
    create: (req, res) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    };

    let entry = new Todo({
        todo: req.body.todo,
        username: req.body.username
    });

    entry.save(function (err) {

            if (err) {
                // not acceptable
                res.status(406).send(err.message);
            } else {
                // created
                res.status(201).send('Todo created successfully');
            }
    });
    },
    update: (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    };
    
    let id = req.params.id;
    let query = Todo.find({_id: id});

    query.updateOne({_id: id}, { $set: { todo: req.body.todo , username: req.body.username} });

    query.exec((err, result) => {
        if (err) {
            // internal server error
            res.status(500).send(err)
        } else {
            if (result.nModified > 0) {
            // ok
            res.status(200).send({msg: 'Update Successfull'});
            } else {
                // Bad request
                res.status(400).send({msg: 'Update Failed!!!'});
            };
        };
    });
    },
    delete: (req, res) => {
    let id = req.params.id;
    Todo.deleteOne({ _id: id }, function (err) {
        // bad request
        if(err) res.status(400).send('Invalid id')
        // ok, successfully deleted
        else res.status(200).send({msg: 'todo deleted successfully'});
    });
    } 
};

module.exports = todo_controller;