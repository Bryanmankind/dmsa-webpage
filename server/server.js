const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require("./routes/router")
const cors = require('cors'); 
require("dotenv/config");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use("/", router);


// Connect to MongoDB
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URI, dbOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Schemas and Models
const prayerRequestSchema = new mongoose.Schema({
  user_email: String,
  prayer_request: String,
});

const planToVisitSchema = new mongoose.Schema({
  user_name: String,
  user_email: String,
  plan_to_visit: String,
});

const PrayerRequest = mongoose.model('PrayerRequest', prayerRequestSchema);
const PlanToVisit = mongoose.model('PlanToVisit', planToVisitSchema);

// Routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}....`);
});
