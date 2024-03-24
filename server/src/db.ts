import mongoose from 'mongoose';
import 'dotenv/config'
require('dotenv').config()

// Define the MongoDB connection string in .env as DB_URL=mongodb://localhost:27017/my_db
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Not connected to MongoDB:", err);
  });

const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

export default User;