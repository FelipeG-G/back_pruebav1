import mongoose, { Schema, Document } from "mongoose";

export interface IMovie extends Document {
  title: string;
  description?: string;
  genre: string;
  releaseDate: Date;
  rating?: number;
  duration?: number;
  director?: string;
  createdAt: Date;
  // 🔹 Nuevos campos
  image?: string;
  url?: string;
  source?: string; // por ejemplo: "pexels", "manual", etc.
  videoFiles?: Array<{
    id?: number;
    quality?: string;
    file_type?: string;
    width?: number;
    height?: number;
    link?: string;
  }>;
  user?: string; // nombre del creador del video
}

const MovieSchema: Schema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, min: 0, max: 10 },
  duration: { type: Number },
  director: { type: String },
  createdAt: { type: Date, default: Date.now },

  // 🔹 Nuevos campos (Pexels / API externas)
  image: { type: String },
  url: { type: String },
  source: { type: String, default: "manual" },
  videoFiles: [
    {
      id: Number,
      quality: String,
      file_type: String,
      width: Number,
      height: Number,
      link: String,
    },
  ],
  user: { type: String },
});

export default mongoose.model<IMovie>("Movie", MovieSchema);
