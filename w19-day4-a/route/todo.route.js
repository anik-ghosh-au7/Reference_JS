import express from 'express';
import todo_controller from '../controller/todo.controller';
import todo_validate from '../validator/todo.validate';

const router = express.Router();

router.get('/', function (req, res) {
  res.send('This is the home route!!!');
});

router.get('/all', todo_controller.getAll);

router.get('/one/:id', todo_controller.getOne);

router.post('/create', todo_validate.validate_create, todo_controller.create);

router.patch('/update/:id', todo_validate.validate_update, todo_controller.update);

router.delete('/delete/:id', todo_controller.delete);

router.use((req, res) => {
    res.status(404).send({msg: 'Invalid route'});
});

module.exports = router;