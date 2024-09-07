import mongoose, { Schema } from "mongoose";

const FavoriteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
  created_at: { type: Date, default: Date.now },
});

export default FavoriteSchema;

// make interface for Favorite

export interface IFavorite {
  user: string;
  manga: string;
  created_at: Date;
}
