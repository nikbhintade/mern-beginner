const express = require("express");
const colors = require('colors');
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require('./config/db')
const port = process.env.port || 8000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CORS

// app.use((req, res ,next) =>
// {
//     res.header("Access-Control-Allow-Origin","*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With,Content-Type,Accept,Authorization"
//         );
//     if (req.method === 'OPTIONS')
//     {
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//         return res.status(200).json({});
//     }

//   // Pass next middleware
//   next();    

// });

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.get("/health", (req, res) => {
    console.log("GET endpoint hit");
    res.status(200).send('Ok');
    console.log("Status should be returned")
});

// NOTE: error middleware needs to be below the routes only then defualt error handler is overidden
app.use(errorHandler);

app.listen(port, () => console.log(`server started on ${port}`))