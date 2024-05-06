import express from "express";
import { createTweet, getTweet, getAllTweets } from "../controller/index.js";

const router = express.Router();

router.post('/tweet', createTweet)
router.get('/tweet/:id', getTweet)
router.get('/tweets', getAllTweets)


export default router;   