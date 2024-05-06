import TweetService from "../service/tweet-service.js";
const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const data = req.body;
        console.log(data, "this is req body data")

        const response = await tweetService.create(data);

        return res.status(201).json({
            success: true,
            message: "Successfully created a Tweet",
            data: response,
            err: null // Change to null or remove the err field if not needed
        });
        console.log(response, "response")
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while creating tweet",
            data: {},
            err: error // Provide the actual error object
        });
    }
}
export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.getTweet(req.params.id);
        console.log(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully Fetched a Tweet",
            data: response,
            err: null 
        }); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching tweet",
            data: {},
            err: error
        });
    }
}
export const getAllTweets = async (req, res) => {
    try {
        const response = await tweetService.getAllTweets({});

        return res.status(200).json({
            success: true,
            message: "Successfully Fetched a Tweet",
            data: response,
            err: null 
        }); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching tweet",
            data: {},
            err: error
        });
    }
}
