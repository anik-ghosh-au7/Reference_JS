import User from '../model/user.model';
import Todo from '../model/todo.model';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const user_controller = {

    getAllUser: (req, res) => {
        User.find((err, data) => {
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

    
    getUser: (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        User.findOne({username}, async (err, data) => {
            if (err) {
                // Internal server error
                res.status(500).send({msg: "Internal Server Error"});
            } else {
                // OK
                if (data.length !== 0) {
                    try {
                        if (await bcrypt.compare(password, data.password)) {
                            // ok
                            res.status(200).send(data);
                        }
                    } catch {
                        res.status(401).send('Unauthorized access');
                    }
                }
                else {
                    // no data
                    res.status(204).send(data);
                }
            };
        });
    },

    createUser: async (req, res) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    };

    try {
        let hashed_password = await bcrypt.hash(req.body.password, 5);
        let entry = new User({
            username: req.body.username,
            password: hashed_password
        });
        entry.save(function (err) {
            if (err) {
                // not acceptable
                res.status(406).send(err.message);
            } else {
                // created
                res.status(201).send('User created successfully');
            }
    });
    } catch {
        res.status(500).send('Internal error occured')
    };
    },

    updateUser: async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    };
    
    let id = req.params.id;
    let query = User.find({_id: id});

    try {
    let hashed_password = await bcrypt.hash(req.body.password, 5);

    query.updateOne({_id: id}, { $set: { username: req.body.username , password: hashed_password } });

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
    } catch {
        res.status(500).send('Internal error');
    };
    },

    deleteUser: async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    try {
        User.findOne({username}, async (err, data) => {
            if (err) {
                // Internal server error
                res.status(500).send({msg: "Internal Server Error"});
            }
            if (data) {
            if (await bcrypt.compare(password, data.password)) {
                User.deleteOne({ username }, function (err) {
                    // bad request
                    if(err) res.status(500).send('Internal error')
                    // ok, successfully deleted
                    else res.status(200).send({msg: 'user deleted successfully'});
                });
                }
                // ok
              else  res.status(401).send('Unauthorized access');
        } else {
            res.status(404).send('User not found');
        }}
        )
    } catch {
        // bad request
        res.status(400).send('Bad request');
    };
    },

    login: (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        User.findOne({username}, async (err, data) => {
            if (err) {
                // Internal server error
                res.status(500).send({msg: "Internal Server Error"});
            } else {
                // OK
                if (data.length !== 0) {
                    try {
                        if (await bcrypt.compare(password, data.password)) {
                            const accessToken = jwt.sign({name: username}, 'verysecretkey')
                            res.status(200).json({accessToken});
                        }
                    } catch {
                        res.status(401).send('Unauthorized access');
                    }
                }
                else {
                    // no data
                    res.status(204).send(data);
                }
            };
        });
    },

    getposts: (req, res) => {
        let username = req.user.name;
        Todo.find({username}, (err, data) => {
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
    }
};

module.exports = user_controller;