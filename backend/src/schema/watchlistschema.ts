import mongoose, { Schema } from "mongoose";

const WatchlistSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
  created_at: { type: Date, default: Date.now },
});

export default WatchlistSchema;

// make interface for Watchlist

export interface IWatchlist {
  user: string;
  manga: string;
  created_at: Date;
}
