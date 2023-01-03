const { Router } = require("express");
// const authMiddleware = require("../auth/middleware");
const BlogImages = require("../models").blogImage;
const BlogData = require("../models").blogData;
const Category = require("../models").category;
const cloudinary = require("../cloudinary/cloudinary");
require("dotenv").config();

const router = new Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "The id given is not a number" });
  }
  try {
    const images = await BlogImages.findByPk(id);

    if (images === null) {
      return res.status(404).send({ message: "Images not found" });
    }

    res.status(200).send({ message: "ok", images });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "That id is not a number" });
  }

  try {
    const image = await BlogImages.findByPk(id);
    if (!image) {
      return res.status(404).send("Image not found");
    }

    await cloudinary.uploader.destroy(image.publicId, {});

    await image.destroy();

    res.send({ message: "image deleted", id });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;

// router.post("/", async (req, res) => {
//   const { images } = req.body;
//   const uploadedImgs = images.map(async (image) => {
//     const upload = await cloudinary.uploader.upload(
//       image,
//       {
//         upload_preset: "unsigned_upload",
//         allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
//       },
//       function (error, result) {
//         if (error) {
//           console.log(error);
//         }
//       }
//     );
//     return upload;
//   });

//   try {
//     const fulfilled = await Promise.all(uploadedImgs).then((values) => {
//       return values;
//     });
//     const publicIds = fulfilled.map((image) => {
//       return image.public_id;
//     });
//     console.log(publicIds);
//     res.status(200).json(publicIds);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
