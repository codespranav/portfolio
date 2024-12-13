import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDB = async ()=>{
    console.log(MONGODB_URI);
    
    if (!MONGODB_URI) console.log("Define the MONGODB_URI environment variable");
    try {
        if (mongoose.connection.readyState >= 1) {
            // Already connected
            console.log("MongoDB is already connected.");
            return;
        }
        const mongoconnection = await mongoose.connect(MONGODB_URI);
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}