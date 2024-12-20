import mongoose from "mongoose";

const blogmodel = mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    content: {
        type: String, 
        required: true
    },
    author: String,
    createdAt: {
        type: Date,
        default: new Date(),
      },
})

export default mongoose.model('Blogs', blogmodel);
