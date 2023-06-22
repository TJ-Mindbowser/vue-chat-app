const app = require("express")();
const options = { cors: true, origin: '*' };
const bodyParser = require('body-parser');
const { newChat } = require("./controller/chat");
const { addChat, getChat } = require("./controller/message");
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, options);
require('./model')

io.on("connection", socket => {
    // either with send()
    getChat('vaishali').then((res) => {
        socket.send(res);
    })
    socket.on('join', function (room) {
        console.log("🚀 ~ file: index.js:16 ~ room:", room)
        socket.join(room);
    });
    socket.on("s1", async (data) => {
        let mData = { ...data, chatId: 'vaishali' }
        let response = await addChat(mData)
        let newMessages = await getChat('vaishali')
        io.in('test-chat').emit('updateList', newMessages)
    });
});
app.get('/', (req, res) => {
    res.send({
        success: true,
        message: '',
        data: {}
    })
})
app.get('/create-new', async (req, res) => {
    let chatId = await newChat()
    res.json({
        success: true,
        message: 'Chat created',
        data: { chatId }
    })
})
httpServer.listen(3000, () => {
    console.log('Listening server at 3000')
});