const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    chatId: String,
    to: String,
    from: String,
    message: String
}, { timestamps: true });

module.exports = mongoose.model('chat', chatSchema, 'chats');