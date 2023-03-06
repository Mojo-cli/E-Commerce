const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

mongoose.set("strictQuery", false)

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Connection request failed");
      console.error(error);
      process.exit(1);
    });
};
