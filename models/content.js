import mongoose, { Schema } from "mongoose";

const contentSchema = new Schema({
    title: String,
    img: String,
    content: String,
    userEmail: String,
    },
    {timestamps:true,}
)

const Content = mongoose.model.content || mongoose.model("Content", contentSchema)
export default Content;