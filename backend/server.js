const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware")
const port = process.env.port || 8000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use("/api/goals", require("./routes/goalRoutes"))

// NOTE: error middleware needs to be below the routes only then defualt error handler is overidden
app.use(errorHandler);

app.listen(port, () => console.log(`server started on ${port}`))