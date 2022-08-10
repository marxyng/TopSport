//jshint esversion:6
const express = require('express');
const bodyParser=require('body-parser');

const app = express();

app.set("view engine", "ejs");


//set port
var port=process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.get("/", function(req,res){
    res.send("index.html");

});

app.get("/about", function(req,res){
    res.send("about.html");
});

app.get("/login", function(req, res){
    res.send("login.html");
});

app.get("/contact", function(req, res){
    res.send("contact.html");
});

app.get("/articles", function(req, res){
    res.send("articles.html");
});

app.listen(port, ()=> {
    console.log("app running");
});

