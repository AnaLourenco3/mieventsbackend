require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

const feedbackRouter = require("./routers/feedbacks");
const categoryRouter = require("./routers/categories");
const blogRouter = require("./routers/blogs");
const imagesBlogRouter = require("./routers/images");
const authRouter = require("./routers/auth");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));

app.use("/auth", authRouter);
app.use("/feedbacks", feedbackRouter);
app.use("/categories", categoryRouter);
app.use("/blogs", blogRouter);
app.use("/images", imagesBlogRouter);

app.listen(port, (_) => console.log(`app is listening on port ${port}`));
