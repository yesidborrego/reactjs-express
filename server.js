const express = require('express');
const path = require('path');
const users = require('./usersDb');

// Settings
const app = express();
app.set('port', process.env.PORT || 3000);
const port = app.get('port');
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.get('/api/users', (req, res) => {
  res.json(
    {
      users
    }
  );
});

// Server listening
app.listen(port, () => {
  console.log(`Server on localhost:${port}`);
});