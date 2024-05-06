import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.error("Error while creating tweet:", error);
            throw error;
        }
    }

    async getAllTweets() {
        try {
            const tweets = await Tweet.find({});
            return tweets;
        } catch (error) {
            console.error("Error while finding tweets:", error);
            throw error;
        }
    }

    async getTweet(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.error("Error while getting tweet:", error);
            throw error;
        }
    }

    async deleteTweet(data) {
        try {
            const result = await Tweet.deleteOne(data);
            return result;
        } catch (error) {
            console.error("Error while deleting a tweet:", error);
            throw error;
        }
    }
}

export default TweetRepository;
