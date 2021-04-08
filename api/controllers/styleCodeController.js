const mongoose = require('mongoose')
const StyleCode = mongoose.model('StyleCodes')

// Retrieve all Style codes from the database
exports.list_all_style_codes = (req, res) => {
  StyleCode.find({}, function(err, styleCode) {
    if (err) res.send(err)
    res.json(styleCode)
  })
}

// Create and Save a new Tutorial
exports.create_style_code = (req, res) => {
  let new_style_code = new StyleCode(req.body)
  new_style_code.save(function(err, styleCode) {
    if (err) res.send(err)
    res.json(styleCode)
  })
}

// Find a single Style code with an id
exports.read_style_code = (req, res) => {
  StyleCode.findById(req.params.styleCodeId, function(err, styleCode) {
    if (err) res.send(err)
    res.json(styleCode)
  })
}

// Update a Style code by the id in the request
exports.update_style_code = (req, res) => {
  StyleCode.findOneAndUpdate({_id: req.params.styleCodeId}, req.body, {new: true}, function(err, styleCode) {
    if (err) res.send(err)
    res.json(styleCode)
  })
}

// Delete a Style code with the specified id in the request
exports.delete_style_code = (req, res) => {
  StyleCode.remove({
    _id: req.params.styleCodeId
  }, function(err, styleCode) {
    if (err) res.send(err)
    res.json({ message: 'Style Code successfully deleted' })
  })
}

exports.delete_all = (req, res) => {
  StyleCode.deleteMany(function(err) {
    if (err) res.send(err)
    res.json({ message: 'All Style Codes successfully deleted' })
  })
};
