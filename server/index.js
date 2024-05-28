// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const allShopRoutes = require('./routes/generalRoutes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());


// routes initialization
app.use('/grantshopwe/api', allShopRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
