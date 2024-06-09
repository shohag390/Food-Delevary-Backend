import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mdshohagali1539:x4wVHDlHWwaLG4wQ@cluster0.qbpke5t.mongodb.net/?').then(() => console.log("DB Connect"))
}