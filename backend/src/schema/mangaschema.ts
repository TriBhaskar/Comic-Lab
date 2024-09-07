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

export default MangaSchema;

// make interface for Manga
export interface IManga {
  title: string;
  author?: string;
  genre?: string;
  description?: string;
  cover_image_url?: string;
  source_api_id: string;
  created_at: Date;
  updated_at: Date;
}
