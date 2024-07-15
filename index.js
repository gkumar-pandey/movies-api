const express = require("express");
const connectDb = require("./db/db");
const {
  error404Handler,
  errorHandler,
} = require("./middleware/ErrorHandler.middleware");
const routes = require("./routes");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
const cors = require("cors");

app.use(helmet());
app.use(cors());
// const allowedOrigins = ["http://localhost:3000"];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (allowedOrigins.includes(origin) || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

connectDb();

app.use("/", routes);

//404 error handler
app.use(error404Handler);
// Global error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running at PORT:3000");
});
