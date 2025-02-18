import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  id: { type: Number, },
  img: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String},
  category: { type: String, required: true },
  img: { type: [String], } 
});

const blog = mongoose.model('blog', blogSchema);

module.exports = blog;
