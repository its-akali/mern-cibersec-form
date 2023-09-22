import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            maxlength: 80,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            maxlength: 100,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
