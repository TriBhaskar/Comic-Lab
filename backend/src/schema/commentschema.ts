import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
  chapter: { type: Schema.Types.ObjectId, ref: "Chapter", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default CommentSchema;

// make interface for Comment
export interface IComment {
  chapter: string;
  user: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}
