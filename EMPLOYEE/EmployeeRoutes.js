const express = require("express");
const app = express();
const {
  getAllEmployee,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../EMPLOYEE/EmployeeController")

const router = express.Router();

router.route("/").get(getAllEmployee).post(createEmployee);
router.route("/:id").get(getEmployeeById).put(updateEmployee).delete(deleteEmployee);

module.exports = router;
