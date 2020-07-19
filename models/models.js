var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});

var DataSchema = new Schema({
  name: { type: String, required: true },
  geometry: { type: { type: String }, coordinates: [Number] }
});

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

var CitySchema = new Schema({
  type: String,
  name: String,
  style: {
    color: String,
    weight: Number,
    opacity: Number
  },
  geometry: {
    type: {
      type: String,
      enum: ['LineString'],
      required: true
    },
    coordinates: {
      type: Array,
      index: '2d'
    }
  },
  properties: {
    direction: String,
    status: String
  }
});

// Mongoose Model definition
module.exports = mongoose.model('JString', CitySchema, 'crud_demo');