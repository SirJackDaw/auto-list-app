import mongoose, { Schema } from "mongoose";

export interface ICar {
  brand: string;
  name: string;
  manufacturedYear: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const CarSchema = new mongoose.Schema(
  {
    _id: Schema.Types.ObjectId,
    brand: { type: String, required: true },
    name: { type: String, required: true },
    manufacturedYear: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const CarModel = mongoose.model<ICar>('Car', CarSchema);

export default CarModel;