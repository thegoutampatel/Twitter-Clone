import { getAllTweets } from "../controller/index.js";
import HashtagRepository from "../repository/hashtag-repository.js";
import TweetRepository from "../repository/tweet-repository.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    try {
      const { content } = data;
      
      // Extract hashtags from content
      const tags = content.match(/#+[a-zA-Z0-9(_)]+/g)?.map(tag => tag.substring(1).toLowerCase()) || [];

      // Create tweet
      const tweet = await this.tweetRepository.create(data);

      // Store hashtags
      const existingTags = await this.hashtagRepository.findByName(tags);
      const existingTagTexts = existingTags.map(tag => tag.text.toLowerCase());
      const newTags = tags.filter(tag => !existingTagTexts.includes(tag));
      
      // Create new tags
      const newTagsPromises = newTags.map(tag => this.hashtagRepository.create({ text: tag, tweets: [tweet.id] }));
      await Promise.all(newTagsPromises);

      // Update existing tags
      existingTags.forEach(tag => {
        if (!tag.tweets.includes(tweet.id)) {
          tag.tweets.push(tweet.id);
          tag.save();
        }
      });

      return tweet;
    } catch (error) {
      throw new Error(`Error while creating tweet: ${error.message}`);
    }
  }

  async getTweet(tweetId) {
    try {
        const tweet = await this.tweetRepository.getTweet(tweetId);
        return tweet;
    } catch (error) {
        throw new Error(`Error while retrieving tweet: ${error.message}`);
    }
}

  async getAllTweets() {
    try {
      const tweet = await this.tweetRepository.getAllTweets();
      return tweet;
    } catch (error) {
      throw new Error(`Error while retrieving tweet: ${error.message}`);
    }
  }
}


export default TweetService;
