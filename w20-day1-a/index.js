import express from 'express';
import mongoose from 'mongoose';
import user_router from './route/user.route';
import path from 'path';


mongoose.connect('mongodb://localhost/User_DB', { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
  .then(console.log('DB connected successfully'))
  .catch(err => console.log(err));


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', user_router);
app.use((req, res) => {
  res.status(404).send({msg: 'Invalid route'});
});

app.listen(3000, function () {
  console.log('Server started on port 3000!!!');
});