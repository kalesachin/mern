const mongoose = require("mongoose");

/*const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
	age: {
    type: String,
    required: true,
  }
});*/
const CustomerSchema = new mongoose.Schema({
  First_Name: {
    type: String,
    required: true,
  },
	Last_Name: {
    type: String,
    required: true,
  },
	Date_Of_Birth: {
    type: String,
    required: true,
  },
  e_mail: {
    type: String,
    required: true,
  },
	phone: {
    type: String,
    required: true,
  },
	customerCreated: {
    type: String,
    required: true,
  },
	QueryFor: {
    type: String,
    required: true,
  },
	QueryDetails: {
    type: String,
    required: true,
  },
	BudgetMin: {
    type: String,
    required: true,
  },
	BudgetMax: {
    type: String,
    required: true,
  },
	TimeFrame: {
    type: String,
    required: true,
  },
	decisionMaker: {
    type: String,
    required: true,
  },
	comments: [{
    custRep: String,
    message: String, 
    dateCreated: Date,
    like: Number,    
  }]
});

  //const Customer = mongoose.model("users", CustomerSchema);
const Customer = mongoose.model("custs", CustomerSchema);

module.exports = Customer;