const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  randomImageLink: {
    type: String
  },
  randomHeader: {
    type: String
  },
  randomDate: {
    type: Date
  },
  randomText: {
    type: String
  }
});

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
