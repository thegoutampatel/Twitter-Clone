import express from "express"
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";
const app = express();

const PORT = 3000; 

app.listen(PORT, async () => {
    console.log(`Server Started At ${PORT}`);

    connect();
    console.log("MongoDb Connected");

    Tweet.create({
        content: "This is my Fist Tweet",
        like: 23,
        noOfRetweets:5,
        comment: "keep it up"
    })

    //create a document
})