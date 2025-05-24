require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// View Engine
app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', 'ejs');

// Routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.render('pages/index', { 
    currentUser: req.session.user 
  });
});

module.exports = app;