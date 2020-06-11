import express from 'express';
import todo_controller from '../controller/todo.controller';
import { check } from 'express-validator';

const router = express.Router();

router.get('/', function (req, res) {
  res.send('This is the home route!!!');
});

router.get('/all', todo_controller.getAll);

router.get('/one/:id', todo_controller.getOne);

router.post('/create', [check('todo').not().isEmpty(), check('username').not().isEmpty()], todo_controller.create);

router.patch('/update/:id', [check('todo').not().isEmpty(), check('username').not().isEmpty()], todo_controller.update);

router.delete('/delete/:id', todo_controller.delete);

module.exports = router;