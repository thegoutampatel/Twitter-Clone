import express from "express";
import { createTweet, getTweet, getAllTweets } from "../controller/index.js";
import { signUp, signIn } from "../controller/user-controller.js";
import { toggleLike } from "../controller/like-controller.js"
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.post('/tweet', createTweet)
router.get('/tweet/:id', getTweet)
router.get('/tweets',authenticate, getAllTweets)


router.post('/signup', signUp)

router.post('/signin', signIn)
router.post('/likes/toggle', toggleLike)

export default router;   