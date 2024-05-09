
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    noOfRetweets: {
        type: Number
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],

});

const Tweet =  mongoose.model('tweet', tweetSchema);

export default Tweet;