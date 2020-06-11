import User from '../model/user.model';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

const user_controller = {
    
    signup: async (req, res) => {
    
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
                res.redirect('/login');
            }
    });
    } catch {
        res.status(500).send('Internal error occured')
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
                if (data) {
                    try {
                        if (await bcrypt.compare(password, data.password)) {
                            res.render('home');
                        } else {
                            res.status(401).send({msg: 'Unauthorized access'});
                        }
                    } catch {
                        res.status(500).send({msg: "Internal Server Error"});
                    }
                }
                else {
                    // no data
                    res.status(400).send({msg: "Invalid request"});
                }
            };
        });
    }
};

module.exports = user_controller;