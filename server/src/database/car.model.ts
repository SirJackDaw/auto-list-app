import mongoose, { Schema } from "mongoose";

const carSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    brand: { type: String, required: true },
    name: { type: String, required: true },
    manufacturedYear: { type: String, required: true },
    price: { type: Number, required: true },
    createdBy: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CarModel = mongoose.model("Car", carSchema);

export default CarModel;