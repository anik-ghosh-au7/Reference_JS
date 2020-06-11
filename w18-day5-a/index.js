import express from 'express';
import mongoose from 'mongoose';
import todo_router from './route/todo.route';
import user_router from './route/user.route'


mongoose.connect('mongodb://localhost/Todo', { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
  .then(console.log('DB connected successfully'))
  .catch(err => console.log(err));


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', todo_router);
app.use('/users', user_router);
app.use((req, res) => {
  res.status(404).send({msg: 'Invalid route'});
});

app.listen(3000, function () {
  console.log('Server started on port 3000!!!');
});