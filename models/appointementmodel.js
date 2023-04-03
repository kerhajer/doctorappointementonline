const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref:'user',
    },
    
    
    DoctorId:String,
    DoctorInfo:Object,
    
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      enum:['confirmed','rejected','pending']
    },
  },
  {
    timestamps: true,
  }
);

const appointmentModel = mongoose.model("Appointment", appointmentSchema);
module.exports = appointmentModel