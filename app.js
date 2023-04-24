const express = require("express");
 
const app = express();

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//Import Route
const weatherRoute = require("./routes/weather.js");

//Use View Engine
app.set("view engine", "ejs");

//Middleware route
app.use("/", weatherRoute);

app.listen(3000, ()=>{
    console.log("Server is started on port 3000: ");
})
