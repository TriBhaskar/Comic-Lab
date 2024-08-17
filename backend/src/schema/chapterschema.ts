import mongoose, { Schema } from "mongoose";

const ChapterSchema = new Schema({
  manga: { type: Schema.Types.ObjectId, ref: "Manga", required: true },
  chapter_number: { type: Number, required: true },
  title: { type: String },
  release_date: { type: Date },
  content_url: { type: String }, // URL to fetch chapter content from the API
  created_at: { type: Date, default: Date.now },
});

const Chapter = mongoose.model("Chapter", ChapterSchema);

export default Chapter;
