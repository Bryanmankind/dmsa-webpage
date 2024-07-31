const express = require("express");
const router = express.Router();

router.post('/prayer-request', async (req, res) => {
    const { user_email, prayer_request } = req.body;
    const newPrayerRequest = new PrayerRequest({ user_email, prayer_request });
    try {
      await newPrayerRequest.save();
      res.status(201).send('Prayer request saved');
    } catch (error) {
      res.status(400).send('Error saving prayer request');
    }
  });
  
router.post('/plan-to-visit', async (req, res) => {
    const { user_name, user_email, plan_to_visit } = req.body;
    const newPlanToVisit = new PlanToVisit({ user_name, user_email, plan_to_visit });
    try {
      await newPlanToVisit.save();
      res.status(201).send('Plan to visit saved');
    } catch (error) {
      res.status(400).send('Error saving plan to visit');
    }
  });

module.exports = router;