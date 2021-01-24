const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Mongo DB connected .....");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

// {
//     "mongoURI" : "mongodb+srv://Rohit:OMSAIRAM1@devconnector.uccfa.mongodb.net/mern_test?retryWrites=true&w=majority"
// }

// {
//   "mongoURI" : "mongodb://localhost:27017/mern_stack"
// }
