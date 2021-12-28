//const express = require("express");
const userModel = require("../models");
//const app = express();

var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/account", function(req, res) {
        var accountMock = {
            "username": "sachin",
            "password": "123",
            "twitter": "@kalesachin"
        }
        if(!req.query.username) {
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username != accountMock.username) {
            return res.send({"status": "error", "message": "wrong username"});
        } else {
            return res.send(accountMock);
        }
    });

    app.post("/account", function(req, res) {
        if(!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            return res.send(req.body);
        }
    });

    app.post("/add_user", async (request, response) => {
        const user = new userModel(request.body);
      
        try {
          await user.save();
          response.send(user);
        } catch (error) {
          response.status(500).send(error);
        }
    });

    app.get("/users", async (request, response) => {
        const users = await userModel.find({});
      
        try {
          response.send(users);
        } catch (error) {
          response.status(500).send(error);
        }
      });
}

module.exports = appRouter;