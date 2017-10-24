var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('style'));
app.use(express.static('images'));

app.get("*",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});