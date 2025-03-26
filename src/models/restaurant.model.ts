import mongoose, { Schema, Document } from "mongoose";

export interface IRestaurant extends Document {
  name: string;
  location: string;
  rating: number;
}

const RestaurantSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 }
  },
  { timestamps: true }
);

const Restaurant= mongoose.model<IRestaurant>("Restaurant", RestaurantSchema);

export default Restaurant;