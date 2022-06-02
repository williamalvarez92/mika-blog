import mongoose from 'mongoose'


const articleShema = new mongoose.Schema({
title: {type: String, required: true, maxlength: 300 },
text: {type: String, required: true, maxlength: 30000 },
owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
tag: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tag'
}]

},
{timestamps: true});

export default mongoose.model('Article', articleShema)