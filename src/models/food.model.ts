import mongoose, { Schema, Document } from "mongoose";

export interface IFood extends Document {
  name: string;
  price: number;
  restaurant: Schema.Types.ObjectId;
}

const FoodSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant", required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IFood>("Food", FoodSchema);
