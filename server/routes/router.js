const express = require("express");
const router = express.Router();
const { PrayerRequest, PlanToVisit } = require("../models/schemas");

// Route to handle prayer requests
router.post('/form-prayer', async (req, res) => {
  const { user_email, prayer_request } = req.body;
  const newPrayerRequest = new PrayerRequest({ user_email, prayer_request });

  try {
    await newPrayerRequest.save();
    res.status(201).send('Prayer request saved');
  } catch (error) {
    console.error('Error saving prayer request:', error);
    res.status(400).send('Error saving prayer request');
  }
});

// Route to handle plan to visit requests
router.post('/form-visit', async (req, res) => {
  const {user, time, contact, alone, location} = req.body;
  const newPlanToVisit = new PlanToVisit({user, time, contact, alone, location });

  try {
    await newPlanToVisit.save();
    res.status(201).send('Plan to visit saved');
  } catch (error) {
    console.error('Error saving plan to visit:', error);
    res.status(400).send('Error saving plan to visit');
  }
});

module.exports = router;
