const mongoose = require ('mongoose');

module.exports = () => {
  return mongoose.connect (
    "mongodb+srv://Vivek13kr:yuCfX4tparU9AEjz@cluster0.mqmmarg.mongodb.net/myapp"
  );
};