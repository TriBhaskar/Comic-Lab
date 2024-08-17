import mongoose, { Schema } from "mongoose";

const FavoriteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
  created_at: { type: Date, default: Date.now },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

export default Favorite;
