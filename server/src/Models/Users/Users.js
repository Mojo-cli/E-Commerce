const mongoose = require("mongoose");
const sequencing = require("./Sequence");

const Users = new mongoose.Schema(
  {
    _id: Number,
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "Users",
  }
);

Users.pre("save", function (next) {
  let doc = this;
  sequencing.getNextSequenceValue("user_id").then((counter) => {
    console.log("Sequence => ", counter);
    if (!counter) {
      sequencing
        .insertCounter("user_id")
        .then((counter) => {
          doc._id = counter;
          console.log(doc);
          next();
        })
        .catch((error) => next(error));
    } else {
      doc._id = counter;
      next();
    }
  });
});

mongoose.model("Users", Users);
