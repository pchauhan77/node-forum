const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const session = require('cookie-session')


require("dotenv").config();

// use port 3000 unless there exists a preconfigured port in env file
const PORT = process.env.PORT || 5000;

app.use(helmet());

app.use(
	rateLimit({
	  windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
	  max: 5,
	  message: "You exceeded 100 requests in 12 hour limit!",
	  headers: true,
	})
  );

const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'example.com',
    path: 'foo/bar',
    expires: expiryDate
  }
}))


//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:4200' }));

const forumRouter = require("./routes/forum");
app.use("/forums", forumRouter);

app.listen(PORT, () => {
	console.log(`Successfully connected on port ${PORT}`);
});