const mongoose = require("mongoose");

const dbURL = process.env.DB_URL;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(dbURL);
    if (connect) {
      console.log("Database connected successfully....");
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDb;
