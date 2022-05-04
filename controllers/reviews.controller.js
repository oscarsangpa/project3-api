const Review = require('../models/Review.model')

module.exports.create = (req, res, next) => {
  console.log(req.body)
  const review = { user, description, itemId } = req.body
  Review.create(review)
    .then((review, itemId) => res.status(200).json({review, itemId}))
    .catch(e => console.log(e))
}

module.exports.detail = (req, res, next) => {
  Review.findById(req.params.id)
    .then(review => res.status(200).json(review))
    .catch(next)
}

module.exports.update = (req, res, next) => {
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(review => {
      console.log(review, req.body)
      res.status(200).json(review)
    })
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Review.findByIdAndDelete(req.params.id)
    .then(review => res.status(202).json(review))
    .catch(next)
}