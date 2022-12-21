require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

const feedbackRouter = require("./routers/feedbacks");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));

app.use("/feedbacks", feedbackRouter);

app.listen(port, (_) => console.log(`app is listening on port ${port}`));
