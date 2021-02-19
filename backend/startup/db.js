const mongoose = require('mongoose');
const color = require('colors')
const connectDB = require('../config/db')

module.exports = function() {
    connectDB()
}