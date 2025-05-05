const mongoose = require("mongoose");

const LogDataSchema = mongoose.Schema({
  fullname: {
    type: String,
    maxLength: 30,
  },
  email: {
    type: String,
  },
  feedback: {
    type: String,
  },
  received_at: {
    type:Date,
    require:true,
    default:Date.now
  }
});

const LogData = mongoose.model("LogData", LogDataSchema);

module.exports=LogData