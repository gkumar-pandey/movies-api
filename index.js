const express = require("express");
const connectDb = require("./db/db");
const movieRouter = require("./routes/movies.route");
const UsersRoute = require("./routes/users.route");
const {
  error404Handler,
  errorHandler,
} = require("./middleware/ErrorHandler.middleware");
const helmet = require("helmet");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(helmet());
const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

connectDb();

app.get("/", (req, res) => {
  res.json("Hello express");
});

app.use("/movies", movieRouter);
app.use("/user", UsersRoute);

//404 error handler
app.use(error404Handler);
// Global error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running at PORT:3000");
});
