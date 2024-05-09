import express from "express";
import connect from "./config/database.js";
import bodyParser from "body-parser"; // Import bodyParser
import router from "./routes/index.js";
import passport from "passport";
import { passportAuth } from "./middleware/jwt-middleware.js";


const app = express();

const PORT = 3000;

app.use(bodyParser.json()); // Use bodyParser for JSON parsing
app.use(bodyParser.urlencoded({extended: true})); // Use bodyParser for URL-encoded parsing

app.use(passport.initialize());
passportAuth(passport);


app.use("/api", router);

app.listen(PORT, async () => {
    console.log(`Server Started At ${PORT}`);

    await connect();
    console.log("MongoDb Connected");
});
