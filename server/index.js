import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { Contact } from './models/Contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }
    
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    await newContact.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!',
      contact: newContact
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});