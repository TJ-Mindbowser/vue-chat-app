const mongoose = require("mongoose");
const uri = "mongodb+srv://tanishq510:2XVc9CFG5FF9fqu9@cluster0.oidgdiv.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));