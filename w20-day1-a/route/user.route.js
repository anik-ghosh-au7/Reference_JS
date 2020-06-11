import express from 'express';
import user_controller from '../controller/user.controller';
import { check } from 'express-validator';

const router = express.Router();

router.get('/', function (req, res) {
  res.send('This is the home route!!!');
});

router.get('/signup', (req, res) => res.render('signup'));

router.get('/login', function (req, res) {
  res.render('login.hbs');
});

router.post('/signup', [check('username').not().isEmpty(), check('password').not().isEmpty()], user_controller.signup);

router.post('/login', user_controller.login);

module.exports = router;