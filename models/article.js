const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const article = new Schema({
title: {type: String, required: true, maxlength: 300 },
text: {type: String, required: true, maxlength: 30000 },
    tag: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }]
},
{timestamps: true});

module.exports = mongoose.model('Article', article);