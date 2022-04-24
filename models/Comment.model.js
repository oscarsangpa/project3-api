const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // rating: {
    //   type: Number,
    //   required: true,
    // },
    description: {
      type: String,
      required: [true, "Tell us your opinion!"],
    },
    images: {
      type: [String],
      //default: //img default cloudinary
        
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;
