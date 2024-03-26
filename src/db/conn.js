const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/students-api").then(() => {
    console.log("connection success mongoose...");
}).catch((err) => {
    console.log("connection failed");
})