const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    description: { type: String },
    cover: { type: String, required: true },
    content: String,
    user: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('blogs', mySchema);