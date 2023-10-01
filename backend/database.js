const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Meadel:Meadel@cluster0.xanuhkb.mongodb.net/Meadel?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (err) console.log("---", err);
    else {
      console.log("connected");
    }
  });
};

module.exports = mongoDB;
