import mongoose from "mongoose";
import UserSchema, { IUser } from "../schema/userschema";
import ChapterSchema, { IChapter } from "../schema/chapterschema";
import CommentSchema, { IComment } from "../schema/commentschema";
import FavoriteSchema, { IFavorite } from "../schema/favouriteschema";
import MangaSchema, { IManga } from "../schema/mangaschema";
import WatchlistSchema, { IWatchlist } from "../schema/watchlistschema";

export const User = mongoose.model<IUser>("User", UserSchema);
export const Comment = mongoose.model<IComment>("Comment", CommentSchema);
export const Manga = mongoose.model<IManga>("Manga", MangaSchema);
export const Chapter = mongoose.model<IChapter>("Chapter", ChapterSchema);
export const Watchlist = mongoose.model<IWatchlist>(
  "Watchlist",
  WatchlistSchema
);
export const Favorite = mongoose.model<IFavorite>("Favorite", FavoriteSchema);
