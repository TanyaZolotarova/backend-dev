import mongoose from "mongoose";

const selectionSchema = new mongoose.Schema({
  id: String,
});

export const selectionModel = mongoose.model("Selection", selectionSchema);
