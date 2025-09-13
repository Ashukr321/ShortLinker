import mongoose from 'mongoose';

// urlSchema 
const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
  },
  shortCode: {
    type: String,
    unique: true,
    required: true,
  },
  shortUrl: {
    type: String,
    unique: true,
    required: true,
  }
}, {
  timestamps: true //this add createdAt And Updated At field
})

const Url = mongoose.model("Url", urlSchema);
export default Url