var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IssueSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    isSenate: { type: Boolean, default: true },
    isHouse: { type: Boolean, default: true },
    isActive: { type: Boolean, default: false },
    postcard_image: { type: 'string' }
});

module.exports = mongoose.model('Issue', IssueSchema);
