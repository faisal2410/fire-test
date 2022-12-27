import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const morgan = require("morgan");

require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.log("DB connection error ", err));

// middlewares
app.use(cors());
app.use(morgan("dev"));

// routes
app.get("/api/:message", (req, res) => {
  res.json({
    message: `Your message is received ${req.params.message}`,
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
