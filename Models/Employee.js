const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name : {type : String},
  contact : {type : String},
  email : {type : String},
  bloodGroup : {type : String},
  age : {type : Number}
},{
  timestamps : true
});


module.exports = mongoose.model("Employee", employeeSchema);
