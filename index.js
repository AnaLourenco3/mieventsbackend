require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("welcome on this page");
});

// app.get("/api/images", async (req, res) => {
//     const { resources } = await cloudinary.search
//       .expression("folder:Feedback")
//       .sort_by("public_id", "desc")
//       .max_results(30)
//       .execute();

//     const publicIds = resources.map((file) => file.public_id);
//     res.send(publicIds);
//   });

app.post("/", async (req, res) => {
  try {
    const { image } = req.body;

    const uploadedImage = await cloudinary.uploader.upload(image, {
      upload_preset: "Homepage",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });

    console.log(uploadedImage);
    res.json({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.listen(port, (_) => console.log(`app is listening on port ${port}`));
