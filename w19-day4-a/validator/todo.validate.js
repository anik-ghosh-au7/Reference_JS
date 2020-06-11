const todo_validate = {
    
    validate_create: (req, res, next) => {
        if (!req.body.todo) {
            res.status(400).send("todo field can't be empty!!!");
        } else {
            next();
        };
    },
    validate_update: (req, res, next) => {
        if (!req.body.todo) {
            res.status(400).send("todo field can't be empty!!!");
        } else {
            next();
        };
    }
};

module.exports = todo_validate;