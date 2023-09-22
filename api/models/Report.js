const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema({
  Reg_no: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  photos:{
    type:String
  },
  Vtype:{
    type: String
  },
  Active_:{
    type: Boolean,
    default: true
  }
});
const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
