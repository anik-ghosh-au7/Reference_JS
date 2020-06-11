import express from 'express';
import mongoose from 'mongoose';
import router from './route/todo.route';


mongoose.connect('mongodb://localhost/Todo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('DB connected successfully'))
  .catch(err => console.log(err));


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', router);

app.listen(3000, function () {
  console.log('Server started on port 3000!!!');
});