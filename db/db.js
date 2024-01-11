const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://gautamshekhar078:0oeoi0z3wHOfGncr@movies.t21rjtg.mongodb.net/?retryWrites=true&w=majority";
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
