const { connect } = require("http2");
const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = connectDB;
