const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String
});

module.exports = mongoose.model('Note', NoteSchema);