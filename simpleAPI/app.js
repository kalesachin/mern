var express = require ("express");
var cors = require('cors')
var bodyParser = require ("body-parser");
const mongoose = require("mongoose");

var app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require ("./routes/routes.js")(app);

mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,    
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

var server = app.listen(3000, function(){
    console.log("CORS-enabled web server Listening on port %s", server.address().port);
});




