import mongoose, { Schema } from "mongoose";

const WatchlistSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
  created_at: { type: Date, default: Date.now },
});

const Watchlist = mongoose.model("Watchlist", WatchlistSchema);

export default Watchlist;
