const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        console.error("MONGO_URI is not set. Add it to backend/.env.");
        if (process.env.NODE_ENV === "production") process.exit(1);
        return;
    }
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message || err);
        if (process.env.NODE_ENV === "production") {
            process.exit(1);
        }
        console.warn(
            "Dev server continues without DB. Fix Atlas URI, network/DNS (SRV), or run local MongoDB; API routes that use the DB will error until connected."
        );
    }
};

module.exports = connectDB;