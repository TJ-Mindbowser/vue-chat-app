let chat = require('../model/chat')
/**
 * Function to create a new chat
*/
module.exports.addChat = (data) => {
    try {
        return chat.create(data)
            .catch((e) => {
                throw e
            })
    } catch (error) {
        console.log("🚀 ~ file: chat.js:7 ~ newChat ~ error:", error)
    }
}
/**
 * Function to chat for admin
 * @param {*} fromId 
 * @returns 
 */
module.exports.getChatForAdmin = (fromId) => {
    try {
        return chat.find({ from: fromId, to: 'admin' })
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

/**
 * Function to get chat for user
 * @param {*} toId 
 * @returns 
 */
module.exports.getChatForUsers = (toId) => {
    try {
        return chat.find({ to: toId })
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

/**
 * Function to get specific chat
 * @param {*} id 
 * @returns 
 */
module.exports.getChat = (id) => {
    try {
        return chat.find({ chatId: id }).lean()
            .then((res) => {
                return res
            })
            .catch((e) => {
                throw e
            })
    } catch (error) {
        console.log("🚀 ~ file: chat.js:7 ~ newChat ~ error:", error)
    }
}