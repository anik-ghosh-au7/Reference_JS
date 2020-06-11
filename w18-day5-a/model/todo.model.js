import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: { type: String },
    username: {type: String}
},
{
    timestamps: true
});

module.exports = mongoose.model('todo', todoSchema, 'todo_list');