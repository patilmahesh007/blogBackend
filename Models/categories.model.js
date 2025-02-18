import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id: { type: Number, },
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true }
});

const category = mongoose.model('category', categorySchema);