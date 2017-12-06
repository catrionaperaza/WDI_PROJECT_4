const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const express = require('express');
const app = express();
const environment = app.get('env');

const { db } = require('../config/environment');
mongoose.connect(db[environment]);

//REQUIRE & DROP MODELS

const User = require('../models/user');
User.collection.drop();

const Dinner = require('../models/dinner');
Dinner.collection.drop();

User.create = [{
  
}]
