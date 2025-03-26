import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  user: Schema.Types.ObjectId;
  foodItems: [{ food: Schema.Types.ObjectId; quantity: number }];
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled";
}

const OrderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    foodItems: [
      {
        food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
        quantity: { type: Number, required: true }
      }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Completed", "Cancelled"], default: "Pending" }
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
