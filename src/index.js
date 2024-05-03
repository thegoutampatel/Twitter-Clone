import express from "express"
import connect from "./config/database.js";
import TweetRepository from "./repository/tweet-repository.js";
// import Tweet from "./models/tweet.js";
// import Hastag from "./models/hashtag.js";
const app = express();

const PORT = 3000; 

app.listen(PORT, async () => {
    console.log(`Server Started At ${PORT}`);

    connect();
    console.log("MongoDb Connected");

    const tweetRepo = new TweetRepository();

    //For get All Tweets
    // let tweets = await tweetRepo.getAllTweets();
    // console.log(tweets);

    //get tweet by id
    // let tweet = await tweetRepo.getTweet("66346ec600f449dfc6980cfb");
    // console.log(tweet + "By id");

    //delete a tweet by id
    // let del = await tweetRepo.deleteTweet({
    //     "_id": "66346eac5c85295a1f598a99"
    // });
    // console.log(del + "  Deleted");

    // Tweet.create({
    //     content: "This is my Fist Tweet",
    //     like: 23,
    //     noOfRetweets:5,
    //     comment: "keep it up"
    // })

    // Hastag.create({
    //     text: "travel",
    //     tweets: []
    // })

    //create a document
})