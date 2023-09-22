const employeeService = require("../Services/EmployeeService")

exports.getAllEmployee = async (req, res) => {
    try {
        const employee = await employeeService.getAllEmployee();
        res.json({ data: employee, status: "Success" })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        res.json({ data: employee, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await employeeService.getEmployeeById(req.params.id);
        res.json({ data: employee, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
      const employee = await employeeService.updateEmployee(req.params.id, req.body);
      res.json({ data: employee, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.deleteEmployee = async (req, res) => {
    try {
      const employee = await employeeService.deleteEmployee(req.params.id);
      res.json({ data: employee, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };