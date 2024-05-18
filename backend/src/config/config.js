import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/email', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit process with failure
  }
};

// Call the connectDB function to establish the connection
connectDB();


export default connectDB;
