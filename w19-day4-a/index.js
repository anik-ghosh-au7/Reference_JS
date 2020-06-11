import express from 'express';
import router from './route/todo.route';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use('/', router);

app.listen(3000, function () {
  console.log('Server started on port 3000!!!');
});