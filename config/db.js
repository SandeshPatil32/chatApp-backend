const mongoose = require('mongoose');

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb Connected");
  } catch(error){
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
}

module.exports = connectDB;
