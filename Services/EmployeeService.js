const employeeModel = require("../Models/Employee");

exports.getAllEmployee = async() => {
    return await  employeeModel.find(); 
}

exports.createEmployee = async(employee) => {
    return await employeeModel.create(employee);
}

exports.getEmployeeById = async (id) => {
    return await employeeModel.findById(id);
}

exports.updateEmployee = async (id, employee) => {
    return await employeeModel.findByIdAndUpdate(id, employee);
  };
   
  exports.deleteEmployee = async (id) => {
    return await employeeModel.findByIdAndDelete(id);
  };