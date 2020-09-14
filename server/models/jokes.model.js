const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'Joke setup is required'],
        minlength: [10, 'Joke setup must be at least 10 characters long'],
    },
    joke: {
        type: String,
        required: [true, 'Punchline is required'],
        maxlength: [3, 'Punchline must be at least 3 characters long'],
    },
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
