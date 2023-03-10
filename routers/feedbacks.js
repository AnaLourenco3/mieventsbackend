const { Router } = require("express");
// const authMiddleware = require("../auth/middleware");
const Feedback = require("../models").feedback;
const cloudinary = require("../cloudinary/cloudinary");
require("dotenv").config();

const router = new Router();

// Get all feedback
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.status(200).send({ message: "ok", feedbacks });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { image } = req.body;

    console.log("sending file to cloudinary");
    const uploadedImage = await cloudinary.uploader.upload(image, {
      upload_preset: "Homepage",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });

    console.log(uploadedImage.secure_url);
    const newFeedback = await Feedback.create({
      imageUrl: uploadedImage.secure_url,
      publicId: uploadedImage.public_id,
    });

    res.json({ msg: "feedback correctly added", feedback: newFeedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Feedback id is not a number" });
  }
  try {
    const feedback = await Feedback.findByPk(id);

    if (feedback === null) {
      return res.status(404).send({ message: "feedback not found" });
    }

    res.status(200).send({ message: "ok", feedback });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Feedback id is not a number" });
  }

  try {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) {
      return res.status(404).send("Artwork not found");
    }

    await cloudinary.uploader.destroy(feedback.publicId, {});

    await feedback.destroy();

    res.send({ message: "feedback deleted", id });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.put("/:id/enabled", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Feedback id is not a number" });
  }
  try {
    const feedback = await Feedback.findByPk(id);

    if (!feedback) {
      return res.status(404).send({ message: "Feedback not found" });
    }
    const enabled = !feedback.enabled;

    await feedback.update({ enabled: enabled });

    res.status(200).send({ message: "ok", feedback });
  } catch (error) {
    console.log(error);
    return res.status(503).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
