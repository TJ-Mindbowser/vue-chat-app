let newChat = require('../model/newChat')
/**
 * Function to create a new chat
*/
module.exports.newChat = () => {
    try {
        let id = (Math.random() + 1).toString(36).substring(7)
        return newChat.create({
            user: id
        })
            .then(() => {
                return id
            })
            .catch((e) => {
                throw e
            })
    } catch (error) {
        console.log("🚀 ~ file: chat.js:7 ~ newChat ~ error:", error)
    }
}
