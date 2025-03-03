import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Prevent redefining the model
const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", BlogSchema);

export default Blogs;
