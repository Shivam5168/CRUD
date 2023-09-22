const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./EMPLOYEE/EmployeeRoutes');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const options = {
  definition : {
    openapi : '3.0.0',
    info : {
      title : 'Node JS API Project For MongoDB',
      version : '1.0.0'
    },
    servers : [
      {
        url : 'http://localhost:3006/'
      }
    ]
  },
  apis : ['./server.js']
}

const swaggerSpec = swaggerJsDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use("/api/Employee", employeeRouter);
mongoose.connect('mongodb://0.0.0.0:27017/CRUD', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('\x1b[36m%s\x1b[0m', ' Connected to mongoDB!');
  })
  .catch((err) => {
    console.error('\x1b[31m%s\x1b', 'Error connecting to MongoDB:', err);
  });

/**
 * @swagger
 * /api/Employee:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test Get method
 */

/**
 * @swagger
 * /api/Employee/{id}:
 *   get:
 *     summary: To Find a Employee by id
 *     description: To Find a Employee by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: String Id required  # Update the description
 *         schema:
 *           type: string  # Change the type to "string"
 *     responses:
 *       200:
 *         description: This is used to Find data by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Employee:
 *                   $ref: '#/components/schemas/Employee'
 */



/**
 * @swagger
 * components: 
 *   schemas: 
 *     Employee:
 *       type: object
 *       properties:      
 *         name: 
 *           type: string
 *         contact:
 *           type: string
 *         email: 
 *           type: string
 *         bloodGroup:
 *           type: string
 *         age: 
 *           type: integer
 */

/**
 * @swagger
 * /api/Employee:
 *   post:
 *     summary: To insert an employee
 *     description: To insert an employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       '200':
 *         description: Added Successfully
 */

/**
 * @swagger
 * /api/Employee/{id}:
 *   delete:
 *     summary: To delete a Employee by id
 *     description: To delete a Employee by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: String Id required  # Update the description
 *         schema:
 *           type: string  # Change the type to "string"
 *     responses:
 *       200:
 *         description: This is used to delete data by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Employee:
 *                   $ref: '#/components/schemas/Employee'
 */

/**
 * @swagger
 * /api/Employee/{id}:
 *   put:
 *     summary: Update a Employee by ID
 *     description: This endpoint allows you to update a Employee's information by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the Employee to be updated.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: Successful response containing the updated Employee data.
 */


const PORT = process.env.port || 3006;
app.listen(PORT, (error) => {
    if(!error)
        console.log('\x1b[43m%s\x1b[0m',`Server is Successfully Running, and App is listening on port ${PORT}` )
    else 
        console.log("Error occurred, server can't start", error);
    }
);
module.exports = app;

