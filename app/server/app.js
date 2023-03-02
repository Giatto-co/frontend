//require packages
// require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

//startup express app
const app = express();

const port = 3003;

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//route to request
app.use('/api/v1/user', userRoutes);

//listen for a request 
app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});