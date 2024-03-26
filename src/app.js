const express = require("express");
require("./db/conn");
const Student = require("./models/students");

app = express();

//middle ware to accept json object in req.body
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save();
    res.send("Hello world");
});
// reading the database data
app.get("/", async (req, res) => {
    const studentsData = await Student.find();
    res.send(studentsData);
});

//Read the individual record by the filter if anyone want to give filter on 
app.get("/:id", async(req, res) => {
    const id = req.params.id;
    const result = await Student.find({_id:id});
    res.send(result);
});

//delete request 
app.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    const result = await Student.deleteOne({_id:id})
    res.send(result);
})

//update using patch method 
app.patch("/:id",async(req,res)=>{
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate({_id:_id},req.body);
    res.send(updateStudent)
})

app.listen(8000, () => console.log("listening to http://localhost:8000"));