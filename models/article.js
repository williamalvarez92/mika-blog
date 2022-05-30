const mongoose = require('mongoose');


const article = new mongoose.Schema({
title: {type: String, required: true, maxlength: 300 },
text: {type: String, required: true, maxlength: 30000 },
owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
tag: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tag'
}]

},
{timestamps: true});

module.exports = mongoose.model('Article', article);