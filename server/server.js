const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require("./routes/router")
const cors = require('cors'); 

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
mongoose.connect('mongodb://localhost:27017/dmsacollection', { useNewUrlParser: true, useUnifiedTopology: true });

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
app.post('/prayer-request', async (req, res) => {
  const { user_email, prayer_request } = req.body;
  const newPrayerRequest = new PrayerRequest({ user_email, prayer_request });
  try {
    await newPrayerRequest.save();
    res.status(201).send('Prayer request saved');
  } catch (error) {
    res.status(400).send('Error saving prayer request');
  }
});

app.post('/plan-to-visit', async (req, res) => {
  const { user_name, user_email, plan_to_visit } = req.body;
  const newPlanToVisit = new PlanToVisit({ user_name, user_email, plan_to_visit });
  try {
    await newPlanToVisit.save();
    res.status(201).send('Plan to visit saved');
  } catch (error) {
    res.status(400).send('Error saving plan to visit');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}....`);
});
