const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

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

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const forumRouter = require("./routes/forum");
app.use("/forums", forumRouter);

app.listen(PORT, () => {
	console.log(`Successfully connected on port ${PORT}`);
});