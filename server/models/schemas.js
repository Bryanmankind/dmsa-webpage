const mongoose = require("mongoose");

// Define Schemas and Models
const requestFrom = new mongoose.Schema({ 
    user_email: { type: String, trim: true },
    prayer_request: { type: String, trim: true },
});

const planToVisit = new mongoose.Schema({
    name : {type: String, trim: true},
    time : {type: String, trim: true},
    contact : {type: Number, trim: true},
    NotAlone : {type: String, trim: true},
    location : {type: String, trim: true},
})

const PrayerRequest = mongoose.model('PrayerRequest',requestFrom);
const PlanToVisit = mongoose.model('PlanToVisit', planToVisit);

module.exports = {PrayerRequest, PlanToVisit };
