const express = require("express");
const connectDb = require("./db/db");
const movieRouter = require("./routes/movies.route");
const UsersRoute = require("./routes/users.route");

const app = express();
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.json("Hello express");
});

app.use("/movies", movieRouter);
app.use("/user", UsersRoute);

app.listen(3000, () => {
  console.log("Server is running at PORT:3000");
});
