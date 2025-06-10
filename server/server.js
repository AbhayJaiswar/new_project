// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',     // e.g., 'localhost'
  user: 'root',     // e.g., 'root'
  password: '', // e.g., 'yourpassword'
  database: process.env.DB_NAME  // e.g., 'yourdbname'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL Database');
  }
});

// Example API Route
app.get('/', (req, res) => {
  res.send('MySQL-connected server is running!');
});

// Example DB query
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching users:', err);
      res.status(500).json({ error: 'Database query error' });
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
