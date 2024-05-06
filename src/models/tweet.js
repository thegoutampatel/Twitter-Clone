
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    like: {
        type: Number
    },
    noOfRetweets: {
        type: Number
    },
    comment: {
        type: String
    }
 

});

const Tweet =  mongoose.model('tweet', tweetSchema);

export default Tweet;