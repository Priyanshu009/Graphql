const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // new id will be default
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);