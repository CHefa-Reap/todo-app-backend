const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");
//Load the env
dotenv.config({ path: "./config/config.env" });

//Connect the DB
connectDB();

//Linking Router
const todos = require("./routes/todos");
const app = express();

//Body Parser
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/todos", todos);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
