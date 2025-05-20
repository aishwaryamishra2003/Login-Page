const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/loginapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String, // plain text (not secure for real apps)
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  const existing = await User.findOne({ username });

  if (existing) {
    return res.json({ success: false, message: 'User already exists' });
  }

  await User.create({ username, password }); // Save plain password
  res.json({ success: true, message: 'User created' });
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.json({ success: false, message: 'User not found' });
  }

  if (user.password !== password) {
    return res.json({ success: false, message: 'Incorrect password' });
  }

  res.json({ success: true, message: 'Login successful' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
