require('dotenv').config({ path: '.env' });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes');
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `server is running on http://localhost:${process.env.PORT || 3000}`
  );
});
