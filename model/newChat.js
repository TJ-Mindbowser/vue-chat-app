const mongoose = require('mongoose');
const initiateChat = new mongoose.Schema({
    user: String
});

module.exports = mongoose.model('initiateChat', initiateChat, 'initiateChats');