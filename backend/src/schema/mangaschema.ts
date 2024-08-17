import mongoose, { Schema } from "mongoose";

const MangaSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  genre: { type: String },
  description: { type: String },
  cover_image_url: { type: String },
  source_api_id: { type: String, unique: true }, // Reference to the third-party API ID
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Manga = mongoose.model("Manga", MangaSchema);

export default Manga;
