const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StyleCodeSchema = new Schema({
  accessory: String,
  category: String,
  club: String,
  description: String,
  garment: String,
  season: String,
  styleCode: {
    type: String,
    required: 'This records needs a Style Code'
  },
  year: Number,
},
{timestamps: true})

StyleCodeSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
});


module.exports = mongoose.model('StyleCodes', StyleCodeSchema)