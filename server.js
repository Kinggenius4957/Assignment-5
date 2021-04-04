const express = require("express");
const studentRouter = require("./Router/studentRouter");

require("./config/dbConnect");


const app = express();
app.use(express.json());

app.use("/students", studentRouter);

app.listen(4000, () => console.log("server is moving smoothly"));
