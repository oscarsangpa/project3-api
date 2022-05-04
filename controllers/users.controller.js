const createError = require('http-errors');
const User = require('../models/User.model');
require("../models/Review.model");


module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
    .populate("reviews")
    .populate(itemId)
  .then(user => {
      if (!user) {
        // not found
        next(createError(404, 'User not found'))
      } else {
        res.status(200).json(user)
      }
    })
    .catch(next)
}

module.exports.list = (req, res, next) => {
  User.find()
    .populate('reviews')
    .populate(itemId)
    .then(users => {
        if (!users) {
          res.status(200).json([])
        } else {
          res.status(200).json(users)
        }
      })
    .catch(next)
}

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.currentUser)
    .populate("reviews")
    .then(user => {
      if (!user) {
        // not found
        next(createError(404, 'User not found'))
      } else {
        res.status(200).json(user)
      }
    })
    .catch(next)
  }