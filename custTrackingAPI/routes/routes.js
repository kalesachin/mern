//const express = require("express");
const customerModel = require("../models");
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
        const user = new customerModel(request.body);
      
        try {
          await user.save();
          response.send(user);
        } catch (error) {
          response.status(500).send(error);
        }
    });

    app.post("/customers", async (request, response) => {
        const customer = new customerModel(request.body);
      
        try {
          await customer.save();
          response.send(customer);
        } catch (error) {
          response.status(500).send(error);
        }
    });

    app.get("/customers", async (request, response) => {
        const customers = await customerModel.find({});
      
        try {
          response.send(customers);
        } catch (error) {
          response.status(500).send(error);
        }
      });
}

module.exports = appRouter;